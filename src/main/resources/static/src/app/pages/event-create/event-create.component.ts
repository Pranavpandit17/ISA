import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-event-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit, OnChanges {
  @Output() navigate = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  @Input() isModal = false;
  @Input() editEvent: any = null;
  @Input() show = true;
  @Input() saveEvent = false;

  currentStep = 1;
  totalSteps = 5;
  isEditMode = false;

  /** Optional new cover image file (multipart); existing URL stays in imageUrl when editing */
  coverImageFile: File | null = null;
  coverImagePreviewUrl: string | null = null;

  eventData: any = {
    name: '',
    type: 'CONFERENCE',
    description: '',
    fullDescription: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    location: '',
    locationType: 'IN_PERSON',
    format: 'IN_PERSON',
    onlineLink: '',
    capacity: 100,
    visibility: 'PUBLIC',
    organizerName: '',
    organizerEmail: '',
    organizerPhone: '',
    pricing: {
      type: 'FREE',
      memberPrice: 0,
      nonMemberPrice: 0,
      earlyBirdPrice: 0,
      earlyBirdEndDate: ''
    },
    ticketTypes: [] as any[],
    schedule: [] as any[],
    speakers: [] as any[],
    imageUrl: ''
  };

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.editEvent) {
      this.isEditMode = true;
      this.loadEditEventData(this.editEvent);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editEvent']) {
      if (changes['editEvent'].currentValue) {
        this.isEditMode = true;
        this.loadEditEventData(changes['editEvent'].currentValue);
        this.currentStep = 1;
      } else {
        this.isEditMode = false;
        this.resetForm();
        this.currentStep = 1;
      }
    }
    if (changes['show'] && changes['show'].currentValue && this.editEvent) {
      this.isEditMode = true;
      this.loadEditEventData(this.editEvent);
      this.currentStep = 1;
    }
    if (changes['show'] && !changes['show'].currentValue) {
      this.resetForm();
      this.currentStep = 1;
      this.isEditMode = false;
    }
  }

  private revokeCoverPreview(): void {
    if (this.coverImagePreviewUrl && this.coverImagePreviewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(this.coverImagePreviewUrl);
    }
    this.coverImagePreviewUrl = null;
  }

  resetForm(): void {
    this.revokeCoverPreview();
    this.coverImageFile = null;
    this.eventData = {
      name: '',
      type: 'CONFERENCE',
      description: '',
      fullDescription: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      location: '',
      locationType: 'IN_PERSON',
      format: 'IN_PERSON',
      onlineLink: '',
      capacity: 100,
      visibility: 'PUBLIC',
      organizerName: '',
      organizerEmail: '',
      organizerPhone: '',
      pricing: {
        type: 'FREE',
        memberPrice: 0,
        nonMemberPrice: 0,
        earlyBirdPrice: 0,
        earlyBirdEndDate: ''
      },
      ticketTypes: [],
      schedule: [],
      speakers: [],
      imageUrl: ''
    };
    this.errorMessage = '';
    this.successMessage = '';
  }

  onCoverImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }
    this.coverImageFile = file;
    this.revokeCoverPreview();
    this.coverImagePreviewUrl = URL.createObjectURL(file);
  }

  clearCoverImage(): void {
    this.coverImageFile = null;
    this.revokeCoverPreview();
  }

  onSpeakerAvatarChange(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    const speaker = this.eventData.speakers[index];
    if (!speaker) {
      return;
    }
    speaker.avatarFile = file || null;
    if (speaker.avatarPreviewUrl && speaker.avatarPreviewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(speaker.avatarPreviewUrl);
    }
    speaker.avatarPreviewUrl = file ? URL.createObjectURL(file) : null;
  }

  loadEventData(event: any): void {
    let startDateStr = '';
    let startTimeStr = '';
    let endDateStr = '';
    let endTimeStr = '';

    if (event.startTime) {
      startTimeStr = String(event.startTime).split(':').slice(0, 2).join(':');
    }
    if (event.endTime) {
      endTimeStr = String(event.endTime).split(':').slice(0, 2).join(':');
    }
    if (event.startDate) {
      if (typeof event.startDate === 'string') {
        startDateStr = event.startDate.split('T')[0];
      } else {
        const d = new Date(event.startDate);
        startDateStr = d.toISOString().split('T')[0];
      }
    }
    if (event.endDate) {
      if (typeof event.endDate === 'string') {
        endDateStr = event.endDate.split('T')[0];
      } else {
        const d = new Date(event.endDate);
        endDateStr = d.toISOString().split('T')[0];
      }
    }

    const speakersList = event.speakers || [];
    const idToSpeakerIndex = new Map<number, number>();
    speakersList.forEach((s: any, idx: number) => {
      if (s.id != null) {
        idToSpeakerIndex.set(Number(s.id), idx);
      }
    });

    const scheduleRows = (event.schedules || event.schedule || []).map((it: any) => {
      let speakerIndex: number | null = null;
      if (it.speakerId != null && idToSpeakerIndex.has(Number(it.speakerId))) {
        speakerIndex = idToSpeakerIndex.get(Number(it.speakerId)) ?? null;
      }
      const st = it.startTime ? String(it.startTime).split(':').slice(0, 2).join(':') : '';
      const et = it.endTime ? String(it.endTime).split(':').slice(0, 2).join(':') : '';
      return {
        startTime: st,
        endTime: et,
        title: it.title || '',
        description: it.description || '',
        speakerIndex,
        location: it.location || ''
      };
    });

    this.revokeCoverPreview();
    this.coverImageFile = null;

    const mappedTicketTypes = (event.ticketTypes || []).map((t: any) => {
      const rawType = (t.type || 'MEMBER').toString().toUpperCase();
      const price = t.price != null ? Number(t.price) : 0;
      const uiType = rawType === 'MEMBER' && price <= 0 ? 'FREE_MEMBER' : rawType;
      return {
        name: this.defaultTicketName(uiType),
        type: uiType,
        price,
        availableQuantity: t.availableQuantity != null ? Number(t.availableQuantity) : 0,
        quantityLimit: t.quantityLimit,
        description: t.description || '',
        earlyBirdEndDate:
          rawType === 'EARLY_BIRD' && event.earlyBirdEndDate
            ? String(event.earlyBirdEndDate).split('T')[0]
            : ''
      };
    });

    // Backward compatibility: if old events do not have ticket types, synthesize from legacy prices
    if (mappedTicketTypes.length === 0) {
      const memberPrice = Number(event.memberPrice) || 0;
      const freeMemberPrice = Number(event.earlyBirdPrice) || 0;
      const nonMemberPrice = Number(event.nonMemberPrice) || 0;

      if (memberPrice > 0) {
        mappedTicketTypes.push({
          name: this.defaultTicketName('MEMBER'),
          type: 'MEMBER',
          price: memberPrice,
          availableQuantity: Number(event.capacity) || 0,
          quantityLimit: null,
          description: ''
        });
      }
      if (freeMemberPrice > 0) {
        const treatAsEarlyBird = !!event.earlyBirdEndDate;
        const synType = treatAsEarlyBird ? 'EARLY_BIRD' : 'FREE_MEMBER';
        mappedTicketTypes.push({
          name: this.defaultTicketName(synType),
          type: synType,
          price: freeMemberPrice,
          availableQuantity: Number(event.capacity) || 0,
          quantityLimit: null,
          description: '',
          earlyBirdEndDate: treatAsEarlyBird && event.earlyBirdEndDate
            ? String(event.earlyBirdEndDate).split('T')[0]
            : ''
        });
      }
      if (nonMemberPrice > 0) {
        mappedTicketTypes.push({
          name: this.defaultTicketName('NON_MEMBER'),
          type: 'NON_MEMBER',
          price: nonMemberPrice,
          availableQuantity: Number(event.capacity) || 0,
          quantityLimit: null,
          description: ''
        });
      }
    }

    this.eventData = {
      name: event.name || event.title || '',
      type: event.type || 'CONFERENCE',
      description: event.description || event.shortDescription || '',
      fullDescription: event.fullDescription || '',
      startDate: startDateStr,
      endDate: endDateStr,
      startTime: startTimeStr,
      endTime: endTimeStr,
      location: event.location || event.venue || '',
      locationType: event.locationType || 'IN_PERSON',
      format: event.format || event.locationType || 'IN_PERSON',
      onlineLink: event.onlineLink || '',
      capacity: event.capacity ?? 100,
      visibility: event.visibility || 'PUBLIC',
      organizerName: event.organizerName || '',
      organizerEmail: event.organizerEmail || '',
      organizerPhone: event.organizerPhone || '',
      pricing: event.pricing || {
        type: event.pricingType || 'FREE',
        memberPrice: Number(event.memberPrice) || 0,
        nonMemberPrice: Number(event.nonMemberPrice) || 0,
        earlyBirdPrice: Number(event.earlyBirdPrice) || 0,
        earlyBirdEndDate: event.earlyBirdEndDate
          ? String(event.earlyBirdEndDate).split('T')[0]
          : ''
      },
      ticketTypes: mappedTicketTypes,
      schedule: scheduleRows,
      speakers: speakersList.map((s: any) => ({
        name: s.name || '',
        title: s.title || '',
        company: s.company || '',
        bio: s.bio || '',
        avatarUrl: s.avatarUrl || '',
        linkedinUrl: s.linkedinUrl || '',
        twitterUrl: s.twitterUrl || '',
        websiteUrl: s.websiteUrl || '',
        avatarFile: null,
        avatarPreviewUrl: null
      })),
      imageUrl: event.imageUrl || ''
    };
  }

  private loadEditEventData(event: any): void {
    const eventId = Number(event?.id);
    if (!eventId) {
      this.loadEventData(event);
      return;
    }

    this.apiService.getEventById(eventId).subscribe({
      next: (fullEvent: any) => {
        this.loadEventData(fullEvent || event);
      },
      error: () => {
        // Fallback to the provided event object if detail fetch fails.
        this.loadEventData(event);
      }
    });
  }

  onClose(): void {
    if (this.isModal) {
      this.close.emit();
    } else {
      this.navigate.emit('event-management');
    }
  }

  nextStep(): void {
    if (this.validateCurrentStep() && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  validateCurrentStep(): boolean {
    this.errorMessage = '';

    if (this.currentStep === 1) {
      if (!this.eventData.name?.trim() || !this.eventData.type || !this.eventData.description?.trim()) {
        this.errorMessage = 'Please complete Event name, Event type, and Short description.';
        return false;
      }
    } else if (this.currentStep === 2) {
      if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
        this.errorMessage = 'Please fill in start and end date and time.';
        return false;
      }
      const startDateTime = new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
      const endDateTime = new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
      if (!this.isEditMode && startDateTime <= new Date()) {
        this.errorMessage = 'Start date and time must be in the future.';
        return false;
      }
      if (endDateTime <= startDateTime) {
        this.errorMessage = 'End must be after start.';
        return false;
      }
    } else if (this.currentStep === 3) {
      if (!this.eventData.locationType || !this.eventData.format || !this.eventData.location?.trim()) {
        this.errorMessage = 'Please set location type, event format, and venue.';
        return false;
      }
      if (this.eventData.capacity == null || Number(this.eventData.capacity) < 1) {
        this.errorMessage = 'Please enter a valid capacity.';
        return false;
      }
      if (!this.eventData.visibility) {
        this.errorMessage = 'Please choose visibility.';
        return false;
      }
      if (this.eventData.locationType === 'ONLINE' && !this.eventData.onlineLink?.trim()) {
        this.errorMessage = 'Please add the online meeting link.';
        return false;
      }
    } else if (this.currentStep === 4) {
      if (!this.eventData.organizerName?.trim() || !this.eventData.organizerEmail?.trim()) {
        this.errorMessage = 'Organizer name and email are required.';
        return false;
      }
      const email = String(this.eventData.organizerEmail).trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        this.errorMessage = 'Please enter a valid organizer email.';
        return false;
      }
      if (this.eventData.organizerPhone?.trim()) {
        const raw = String(this.eventData.organizerPhone).trim();
        const digits = raw.replace(/\D/g, '').length;
        if (!/^[0-9+\-\s()]{7,20}$/.test(raw) || digits < 7) {
          this.errorMessage = 'Please enter a valid phone number or leave it blank.';
          return false;
        }
      }
      const pType = this.eventData.pricing?.type || 'FREE';
      if (pType === 'PAID' || pType === 'DISCOUNTED') {
        const activeTickets = (this.eventData.ticketTypes || []).filter(
          (t: any) => String(t?.name || '').trim().length > 0
        );
        const hasPricedTicket = activeTickets.some((t: any) => Number(t?.price || 0) > 0);
        if (!hasPricedTicket) {
          this.errorMessage = 'For paid events, add at least one priced ticket type.';
          return false;
        }
      }
      const seenTypes = new Set<string>();
      for (const t of (this.eventData.ticketTypes || [])) {
        const name = String(t?.name || '').trim();
        if (!name) {
          continue;
        }
        const type = String(t?.type || 'MEMBER').toUpperCase();
        if (seenTypes.has(type)) {
          this.errorMessage = `Duplicate ticket type "${type}" is not allowed. Keep only one entry per type.`;
          return false;
        }
        seenTypes.add(type);

        if (type === 'EARLY_BIRD') {
          const earlyBirdEndDate = String(t?.earlyBirdEndDate || '').trim();
          if (!earlyBirdEndDate) {
            this.errorMessage = 'Early Bird ticket requires an end date.';
            return false;
          }
          const today = this.getMinDate();
          if (earlyBirdEndDate < today) {
            this.errorMessage = 'Early Bird end date cannot be before today.';
            return false;
          }
          const eventEnd = this.eventData.endDate
            ? String(this.eventData.endDate).split('T')[0]
            : '';
          if (!eventEnd) {
            this.errorMessage = 'Set the event end date in Date & time (step 2) before using Early Bird.';
            return false;
          }
          if (earlyBirdEndDate > eventEnd) {
            this.errorMessage =
              'Early Bird end date must be on or before the event end date.';
            return false;
          }
        }
      }
      if (!this.validateTicketQuantitiesAgainstCapacity()) {
        return false;
      }
    } else if (this.currentStep === 5) {
      const speakers = this.eventData.speakers || [];
      for (let i = 0; i < speakers.length; i++) {
        const s = speakers[i];
        if (s.avatarFile && !s.name?.trim()) {
          this.errorMessage = 'A speaker photo requires that speaker name.';
          return false;
        }
        if (!s.name?.trim()) {
          this.errorMessage = `Speaker ${i + 1}: enter a name or remove this row.`;
          return false;
        }
      }
      const schedule = this.eventData.schedule || [];
      for (let i = 0; i < schedule.length; i++) {
        const it = schedule[i];
        const partial = !!(it.title || it.startTime || it.endTime || it.description || it.location);
        if (partial && (!it.startTime || !it.endTime || !it.title?.trim())) {
          this.errorMessage = `Schedule item ${i + 1}: start time, end time, and title are required.`;
          return false;
        }
      }
    }

    return true;
  }

  /**
   * Ticket display name sent to API: "{Paid Member|Free Member|…} Ticket" from selected tier.
   */
  defaultTicketName(uiType: string | null | undefined): string {
    const key = String(uiType || 'MEMBER').toUpperCase();
    const labels: Record<string, string> = {
      MEMBER: 'Paid Member',
      FREE_MEMBER: 'Free Member',
      NON_MEMBER: 'Non Member',
      VIP: 'VIP',
      EARLY_BIRD: 'Early Bird'
    };
    const label = labels[key] || 'Ticket';
    return `${label} Ticket`;
  }

  onTicketTypeChange(t: any): void {
    if (!t) return;
    t.name = this.defaultTicketName(t.type);
  }

  addTicketType(): void {
    if ((this.eventData.pricing?.type || 'FREE') === 'FREE') {
      this.errorMessage = 'Ticket types are disabled for free events.';
      return;
    }
    const usedTypes = new Set(
      (this.eventData.ticketTypes || [])
        .map((t: any) => String(t?.type || '').toUpperCase())
        .filter((t: string) => !!t)
    );
    const allTypes = ['MEMBER', 'FREE_MEMBER', 'NON_MEMBER', 'VIP', 'EARLY_BIRD'];
    const nextType = allTypes.find(t => !usedTypes.has(t));
    if (!nextType) {
      this.errorMessage = 'Each ticket type can be added only once.';
      return;
    }
    this.eventData.ticketTypes.push({
      name: this.defaultTicketName(nextType),
      type: nextType,
      price: 0,
      availableQuantity: 0,
      quantityLimit: null,
      description: '',
      earlyBirdEndDate: ''
    });
  }

  removeTicketType(index: number): void {
    this.eventData.ticketTypes.splice(index, 1);
  }

  addSchedule(): void {
    this.eventData.schedule.push({
      startTime: '',
      endTime: '',
      title: '',
      description: '',
      speakerIndex: null,
      location: ''
    });
  }

  removeSchedule(index: number): void {
    this.eventData.schedule.splice(index, 1);
  }

  addSpeaker(): void {
    this.eventData.speakers.push({
      name: '',
      title: '',
      company: '',
      bio: '',
      avatarUrl: '',
      linkedinUrl: '',
      twitterUrl: '',
      websiteUrl: '',
      avatarFile: null,
      avatarPreviewUrl: null
    });
  }

  removeSpeaker(index: number): void {
    const s = this.eventData.speakers[index];
    if (s?.avatarPreviewUrl?.startsWith('blob:')) {
      URL.revokeObjectURL(s.avatarPreviewUrl);
    }
    this.eventData.speakers.splice(index, 1);
  }

  /**
   * Same quantity rules as buildEventJson(): named ticket rows only;
   * blank quantity defaults to full event capacity per tier.
   */
  private validateTicketQuantitiesAgainstCapacity(): boolean {
    const pType = this.eventData.pricing?.type || 'FREE';
    if (pType === 'FREE') {
      return true;
    }
    const cap = Number(this.eventData.capacity);
    if (!Number.isFinite(cap) || cap < 1) {
      return true;
    }
    const namedTickets = (this.eventData.ticketTypes || []).filter((t: any) =>
      String(t?.name || '').trim().length > 0
    );
    if (namedTickets.length === 0) {
      return true;
    }
    let sum = 0;
    for (const t of namedTickets) {
      const raw = t.availableQuantity;
      const q =
        raw != null && raw !== ''
          ? Number(raw)
          : cap;
      if (!Number.isFinite(q) || q < 0 || !Number.isInteger(q)) {
        this.errorMessage =
          'Each ticket quantity must be a non-negative whole number.';
        return false;
      }
      sum += q;
    }
    if (sum > cap) {
      this.errorMessage =
        `Total ticket quantities (${sum}) cannot exceed event capacity (${cap}). Reduce quantities or raise capacity in Location & capacity (step 3).`;
      return false;
    }
    return true;
  }

  validateDateTimes(): boolean {
    this.errorMessage = '';
    if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
      this.errorMessage = 'Please fill in all date and time fields.';
      return false;
    }
    const startDateTime = new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    const endDateTime = new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
    if (!this.isEditMode && startDateTime <= new Date()) {
      this.errorMessage = 'Start date and time must be in the future.';
      return false;
    }
    if (endDateTime <= startDateTime) {
      this.errorMessage = 'End date and time must be after start.';
      return false;
    }
    return true;
  }

  private buildEventJson(): any {
    const pricingType = this.eventData.pricing?.type || 'FREE';
    const speakers = (this.eventData.speakers || []).map((s: any) => ({
      name: String(s.name || '').trim(),
      title: s.title || '',
      company: s.company || '',
      bio: s.bio || '',
      avatarUrl: s.avatarUrl || '',
      linkedinUrl: s.linkedinUrl || '',
      twitterUrl: s.twitterUrl || '',
      websiteUrl: s.websiteUrl || ''
    }));

    const ticketTypes = (this.eventData.pricing?.type || 'FREE') === 'FREE'
      ? []
      : (this.eventData.ticketTypes || [])
      .filter((t: any) => String(t?.type || '').trim())
      .map((t: any) => ({
        name: this.defaultTicketName(t.type),
        type: String(t.type || 'MEMBER').toUpperCase(),
        price: Number(t.price) || 0,
        quantityLimit: t.quantityLimit != null ? Number(t.quantityLimit) : null,
        availableQuantity:
          t.availableQuantity != null && t.availableQuantity !== ''
            ? Number(t.availableQuantity)
            : Number(this.eventData.capacity) || 0,
        description: t.description || ''
      }));

    const findTicket = (codes: string[]) =>
      ticketTypes.find((x: any) =>
        codes.includes(String(x?.type || '').toUpperCase()));

    const paidMemberTicket = findTicket(['MEMBER']);
    const nonMemberTicket = findTicket(['NON_MEMBER']);
    const earlyBirdTicket = findTicket(['EARLY_BIRD']);

    const schedules = (this.eventData.schedule || [])
      .filter((item: any) => item.title?.trim() && item.startTime && item.endTime)
      .map((item: any, orderIndex: number) => ({
        startTime: item.startTime,
        endTime: item.endTime,
        title: String(item.title).trim(),
        description: item.description || '',
        location: item.location || '',
        speakerId:
          item.speakerIndex !== null && item.speakerIndex !== undefined && item.speakerIndex !== ''
            ? Number(item.speakerIndex)
            : null,
        order: orderIndex
      }));

    return {
      name: String(this.eventData.name).trim(),
      type: this.eventData.type,
      description: String(this.eventData.description).trim(),
      fullDescription: this.eventData.fullDescription || '',
      startDate: this.eventData.startDate,
      startTime: this.eventData.startTime,
      endDate: this.eventData.endDate,
      endTime: this.eventData.endTime,
      location: String(this.eventData.location).trim(),
      locationType: this.eventData.locationType,
      format: this.eventData.format,
      onlineLink: this.eventData.onlineLink || '',
      capacity: Number(this.eventData.capacity),
      visibility: this.eventData.visibility,
      organizerName: String(this.eventData.organizerName).trim(),
      organizerEmail: String(this.eventData.organizerEmail).trim(),
      organizerPhone: this.eventData.organizerPhone || '',
      pricingType,
      // Keep legacy pricing fields in sync with ticket types for backend compatibility
      memberPrice: pricingType === 'FREE' ? 0 : Number(paidMemberTicket?.price || 0),
      nonMemberPrice: pricingType === 'FREE' ? 0 : Number(nonMemberTicket?.price || 0),
      earlyBirdPrice: Number(earlyBirdTicket?.price || 0) || 0,
      earlyBirdEndDate: (() => {
        const v = earlyBirdTicket?.earlyBirdEndDate || this.eventData.pricing?.earlyBirdEndDate;
        return v && String(v).trim() ? v : null;
      })(),
      imageUrl: this.eventData.imageUrl || '',
      ticketTypes,
      speakers,
      schedules,
      status: 'DRAFT'
    };
  }

  private appendSpeakerAvatars(formData: FormData, speakersRaw: any[]): void {
    const avatarIdx: number[] = [];
    speakersRaw.forEach((s: any, idx: number) => {
      if (!s.name?.trim()) {
        return;
      }
      if (s.avatarFile) {
        avatarIdx.push(idx);
        formData.append('speakerAvatar', s.avatarFile, s.avatarFile.name);
      }
    });
    if (avatarIdx.length) {
      formData.append('speakerAvatarIndexes', avatarIdx.join(','));
    }
  }

  onSubmit(): void {
    if (!this.validateCurrentStep()) {
      return;
    }
    if (!this.validateDateTimes()) {
      if (this.currentStep !== 2) {
        this.currentStep = 2;
      }
      return;
    }
    if (!this.validateTicketQuantitiesAgainstCapacity()) {
      this.currentStep = 4;
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const jsonBody = this.buildEventJson();
    const speakersRaw = this.eventData.speakers || [];

    const useMultipartCreate =
      !this.isEditMode && (!!this.coverImageFile || speakersRaw.some((s: any) => s.avatarFile));

    const useMultipartUpdate =
      this.isEditMode && this.editEvent?.id && !!this.coverImageFile;

    if (this.isEditMode && this.editEvent?.id) {
      jsonBody.id = this.editEvent.id;
      if (useMultipartUpdate) {
        const fd = new FormData();
        fd.append('event', new Blob([JSON.stringify(jsonBody)], { type: 'application/json' }));
        fd.append('coverImage', this.coverImageFile!, this.coverImageFile!.name);
        this.apiService.updateEventFormData(this.editEvent.id, fd).subscribe({
          next: () => this.onSaveSuccess(),
          error: (e) => this.onSaveError(e)
        });
        return;
      }
      this.apiService.updateEvent(this.editEvent.id, jsonBody).subscribe({
        next: () => this.onSaveSuccess(),
        error: (e) => this.onSaveError(e)
      });
      return;
    }

    if (useMultipartCreate) {
      const fd = new FormData();
      fd.append('event', new Blob([JSON.stringify(jsonBody)], { type: 'application/json' }));
      if (this.coverImageFile) {
        fd.append('coverImage', this.coverImageFile, this.coverImageFile.name);
      }
      this.appendSpeakerAvatars(fd, speakersRaw);
      this.apiService.createEventFormData(fd).subscribe({
        next: () => this.onSaveSuccess(),
        error: (e) => this.onSaveError(e)
      });
      return;
    }

    this.apiService.createEvent(jsonBody).subscribe({
      next: () => this.onSaveSuccess(),
      error: (e) => this.onSaveError(e)
    });
  }

  private onSaveSuccess(): void {
    this.isLoading = false;
    this.successMessage = this.isEditMode ? 'Event updated successfully.' : 'Event created successfully.';
    setTimeout(() => {
      this.saved.emit();
      if (this.isModal) {
        this.close.emit();
      } else {
        this.navigate.emit('event-management');
      }
    }, 1200);
  }

  private onSaveError(error: any): void {
    this.isLoading = false;
    const msg = error?.error?.message || error?.message || '';
    this.errorMessage = msg || 'Something went wrong. Please try again.';
  }

  onCancel(): void {
    this.onClose();
  }

  getMinDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  getMinEndDate(): string {
    return this.eventData.startDate || this.getMinDate();
  }

  /** Upper bound for Early Bird end date: last day of the event (step 2 end date). */
  getEarlyBirdMaxDate(): string {
    if (!this.eventData?.endDate) {
      return '';
    }
    return String(this.eventData.endDate).split('T')[0];
  }

  hasDateValidationError(): boolean {
    if (!this.eventData.startDate || !this.eventData.startTime || this.isEditMode) {
      return false;
    }
    const startDateTime = new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    return startDateTime <= new Date();
  }

  hasEndDateError(): boolean {
    if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
      return false;
    }
    const a = new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    const b = new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
    return b <= a;
  }

  speakerDisplayOptions(): { index: number; label: string }[] {
    return (this.eventData.speakers || []).map((s: any, index: number) => ({
      index,
      label: `Speaker ${index + 1}: ${s.name?.trim() || '(no name yet)'}`
    }));
  }
}
