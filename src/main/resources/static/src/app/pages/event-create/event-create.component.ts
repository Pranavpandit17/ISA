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
      this.loadEventData(this.editEvent);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editEvent']) {
      if (changes['editEvent'].currentValue) {
        this.isEditMode = true;
        this.loadEventData(changes['editEvent'].currentValue);
        this.currentStep = 1;
      } else {
        this.isEditMode = false;
        this.resetForm();
        this.currentStep = 1;
      }
    }
    if (changes['show'] && changes['show'].currentValue && this.editEvent) {
      this.isEditMode = true;
      this.loadEventData(this.editEvent);
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
      ticketTypes: (event.ticketTypes || []).map((t: any) => ({
        name: t.name || '',
        type: (t.type || 'MEMBER').toString().toUpperCase(),
        price: t.price != null ? Number(t.price) : 0,
        availableQuantity: t.availableQuantity != null ? Number(t.availableQuantity) : 0,
        quantityLimit: t.quantityLimit,
        description: t.description || ''
      })),
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
        const mp = Number(this.eventData.pricing?.memberPrice || 0);
        const np = Number(this.eventData.pricing?.nonMemberPrice || 0);
        if (mp <= 0 && np <= 0) {
          this.errorMessage = 'For paid events, enter a member and/or non-member price.';
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

  addTicketType(): void {
    const usedTypes = new Set(
      (this.eventData.ticketTypes || [])
        .map((t: any) => String(t?.type || '').toUpperCase())
        .filter((t: string) => !!t)
    );
    const allTypes = ['MEMBER', 'NON_MEMBER', 'EARLY_BIRD', 'VIP'];
    const nextType = allTypes.find(t => !usedTypes.has(t));
    if (!nextType) {
      this.errorMessage = 'Each ticket type can be added only once.';
      return;
    }
    this.eventData.ticketTypes.push({
      name: '',
      type: nextType,
      price: 0,
      availableQuantity: 0,
      quantityLimit: null,
      description: ''
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

    const uniqueTicketTypes = new Map<string, any>();
    for (const t of (this.eventData.ticketTypes || [])) {
      const ticketName = String(t?.name || '').trim();
      if (!ticketName) {
        continue;
      }
      const ticketType = String(t.type || 'MEMBER').toUpperCase();
      if (!uniqueTicketTypes.has(ticketType)) {
        uniqueTicketTypes.set(ticketType, t);
      }
    }

    const ticketTypes = Array.from(uniqueTicketTypes.values())
      .filter((t: any) => t.name && String(t.name).trim())
      .map((t: any) => ({
        name: String(t.name).trim(),
        type: String(t.type || 'MEMBER').toUpperCase(),
        price: Number(t.price) || 0,
        quantityLimit: t.quantityLimit != null ? Number(t.quantityLimit) : null,
        availableQuantity:
          t.availableQuantity != null && t.availableQuantity !== ''
            ? Number(t.availableQuantity)
            : Number(this.eventData.capacity) || 0,
        description: t.description || ''
      }));

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
      memberPrice: pricingType === 'FREE' ? 0 : Number(this.eventData.pricing?.memberPrice || 0),
      nonMemberPrice: pricingType === 'FREE' ? 0 : Number(this.eventData.pricing?.nonMemberPrice || 0),
      earlyBirdPrice: Number(this.eventData.pricing?.earlyBirdPrice || 0) || 0,
      earlyBirdEndDate: (() => {
        const v = this.eventData.pricing?.earlyBirdEndDate;
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
