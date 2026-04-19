import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public totalMembersSubject = new BehaviorSubject<number>(0);
  setTotalMembers(count: number): void {
    this.totalMembersSubject.next(count);
  }
  public pendingCountSubject = new BehaviorSubject<number>(0);
  setPendingCount(count: number): void {
    this.pendingCountSubject.next(count);
  }
  private readonly backendBaseUrl = (environment.backendBaseUrl || '').replace(/\/+$/, '');
  private readonly apiUrl = `${this.backendBaseUrl}/api`;

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    });
  }

  getBackendBaseUrl(): string {
    return this.backendBaseUrl;
  }

  /** Authorization only — use with FormData so the browser sets multipart boundaries. */
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders(token ? { 'Authorization': `Bearer ${token}` } : {});
  }

  // Auth endpoints
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password });
  }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/me`, {
      headers: this.getHeaders()
    });
  }

  // Membership endpoints
  createMembershipApplication(application: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/membership/applications`, application, {
      headers: this.getHeaders()
    });
  }

  getMembershipApplications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/membership/applications`, {
      headers: this.getHeaders()
    });
  }

  approveApplication(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/membership/applications/${id}/approve`, {}, {
      headers: this.getHeaders()
    });
  }

  rejectApplication(id: number, reason: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/membership/applications/${id}/reject`, { reason }, {
      headers: this.getHeaders()
    });
  }

  getApprovedMembers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/membership/members`, {
      headers: this.getHeaders()
    });
  }

  // Event endpoints
  getEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/events`, {
      headers: this.getHeaders()
    });
  }

  /** Public catalogue: published + PUBLIC visibility — use on landing page */
  getPublishedEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/published`);
  }

  getHomeSliderConfig(): Observable<any> {
    return this.http.get(`${this.apiUrl}/home-slider`);
  }

  updateHomeSliderImages(formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/home-slider`, formData, {
      headers: this.getAuthHeaders()
    });
  }

  deleteHomeSliderImage(imageId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/home-slider`, {
      headers: this.getHeaders(),
      params: { imageId }
    });
  }

  createEvent(event: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/events`, event, {
      headers: this.getHeaders()
    });
  }

  /** multipart/form-data: part "event" (JSON) and optional files coverImage, speakerAvatar */
  createEventFormData(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/events`, formData, {
      headers: this.getAuthHeaders()
    });
  }

  updateEvent(id: number, event: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/events/${id}`, event, {
      headers: this.getHeaders()
    });
  }

  updateEventFormData(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/events/${id}`, formData, {
      headers: this.getAuthHeaders()
    });
  }

  publishEvent(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/events/${id}/publish`, {}, {
      headers: this.getHeaders()
    });
  }

  getEventById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/${id}`, {
      headers: this.getHeaders()
    });
  }

  registerForEvent(eventId: number, registrationData?: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/event-registrations`, {
      eventId: eventId,
      ...registrationData
    }, {
      headers: this.getHeaders()
    });
  }

  // Job/Project Posting endpoints (JobController)
  createJobPosting(jobPosting: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/jobs`, jobPosting, {
      headers: this.getHeaders()
    });
  }

  getJobPostings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/jobs`, {
      headers: this.getHeaders()
    });
  }

  getMyJobPostings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/jobs/my-jobs`, {
      headers: this.getHeaders()
    });
  }

  getOtherJobPostings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/jobs/other-jobs`, {
      headers: this.getHeaders()
    });
  }

  getJobPostingById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/jobs/${id}`, {
      headers: this.getHeaders()
    });
  }

  updateJobPosting(id: number, jobPosting: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/jobs/${id}`, jobPosting, {
      headers: this.getHeaders()
    });
  }

  deleteJobPosting(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/jobs/${id}`, {
      headers: this.getHeaders()
    });
  }

  publishJob(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/jobs/${id}/publish`, {}, {
      headers: this.getHeaders()
    });
  }

  submitProposal(jobPostingId: number, proposal: any): Observable<any> {
    // Use applications endpoint instead of proposals
    return this.http.post(`${this.apiUrl}/jobs/${jobPostingId}/applications`, proposal, {
      headers: this.getHeaders()
    });
  }

  getProposals(jobPostingId: number): Observable<any> {
    // Use applications endpoint instead of proposals
    return this.http.get(`${this.apiUrl}/jobs/${jobPostingId}/applications`, {
      headers: this.getHeaders()
    });
  }

  checkProposalStatus(jobPostingId: number): Observable<any> {
    // Use applications/status endpoint instead of proposals/status
    return this.http.get(`${this.apiUrl}/jobs/${jobPostingId}/applications/status`, {
      headers: this.getHeaders()
    });
  }

  // Bench Resource endpoints
  getBenchResources(): Observable<any> {
    return this.http.get(`${this.apiUrl}/bench-resources`, {
      headers: this.getHeaders()
    });
  }

  getMyBenchResources(): Observable<any> {
    return this.http.get(`${this.apiUrl}/bench-resources/my-resources`, {
      headers: this.getHeaders()
    });
  }

  getBenchResourceById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/bench-resources/${id}`, {
      headers: this.getHeaders()
    });
  }

  createBenchResource(resource: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/bench-resources`, resource, {
      headers: this.getHeaders()
    });
  }

  updateBenchResource(id: number, resource: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/bench-resources/${id}`, resource, {
      headers: this.getHeaders()
    });
  }

  deleteBenchResource(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/bench-resources/${id}`, {
      headers: this.getHeaders()
    });
  }

  archiveBenchResource(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/bench-resources/${id}/archive`, {}, {
      headers: this.getHeaders()
    });
  }

  unarchiveBenchResource(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/bench-resources/${id}/unarchive`, {}, {
      headers: this.getHeaders()
    });
  }

  // Event attendance (admin)
  getEventAttendees(eventId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/event-attendance/event/${eventId}`, {
      headers: this.getHeaders()
    });
  }

  markEventAttendance(registrationId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/event-attendance/mark/${registrationId}`, {}, {
      headers: this.getHeaders()
    });
  }

  // Job Application Management
  acceptJobApplication(applicationId: number, reviewNotes?: string): Observable<any> {
    const body = reviewNotes ? { reviewNotes } : {};
    return this.http.put(`${this.apiUrl}/jobs/applications/${applicationId}/accept`, body, {
      headers: this.getHeaders()
    });
  }

  rejectJobApplication(applicationId: number, rejectionReason: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/jobs/applications/${applicationId}/reject`, { rejectionReason }, {
      headers: this.getHeaders()
    });
  }

  // Bench Resource Interest Management
  submitResourceInterest(resourceId: number, interestData: { message: string; contactEmail: string; contactPhone?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/bench-resources/interests/${resourceId}`, interestData, {
      headers: this.getHeaders()
    });
  }

  getResourceInterests(resourceId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/bench-resources/interests/${resourceId}`, {
      headers: this.getHeaders()
    });
  }

  // Membership / Payment Plans
  getPublicPlans(): Observable<any> {
    return this.http.get(`${this.apiUrl}/plans`);
  }

  getMembershipPlans(): Observable<any> {
    // Active plans for members
    return this.http.get(`${this.apiUrl}/payment-plans`, {
      headers: this.getHeaders()
    });
  }

  selectPlan(planId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/plans/select-plan`, { planId }, {
      headers: this.getHeaders()
    });
  }

  getAllMembershipPlansAdmin(): Observable<any> {
    // All plans for admin (including inactive)
    return this.http.get(`${this.apiUrl}/payment-plans/all`, {
      headers: this.getHeaders()
    });
  }

  getMembershipPlanById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/payment-plans/${id}`, {
      headers: this.getHeaders()
    });
  }

  createMembershipPlan(plan: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/payment-plans`, plan, {
      headers: this.getHeaders()
    });
  }

  updateMembershipPlan(id: number, plan: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/payment-plans/${id}`, plan, {
      headers: this.getHeaders()
    });
  }

  deleteMembershipPlan(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/payment-plans/${id}`, {
      headers: this.getHeaders()
    });
  }

  createMembershipPayment(planId: number, paymentMethod: string = 'CREDIT_CARD', transactionId?: string): Observable<any> {
    const payload: any = {
      planId: planId,
      paymentMethod: paymentMethod
    };
    if (transactionId) {
      payload.transactionId = transactionId;
    }
    return this.http.post(`${this.apiUrl}/membership/payments`, payload, {
      headers: this.getHeaders()
    });
  }

  getMyMembershipPaymentHistory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/membership/payments/my-history`, {
      headers: this.getHeaders()
    });
  }

  getMemberMembershipPaymentHistory(memberId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/membership/payments/member/${memberId}`, {
      headers: this.getHeaders()
    });
  }

  downloadMembershipInvoice(paymentId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/membership/payments/${paymentId}/invoice`, {
      headers: this.getHeaders(),
      responseType: 'blob'
    });
  }

  // Notifications
  getMyNotifications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/notifications`, {
      headers: this.getHeaders()
    });
  }

  getUnreadNotificationsCount(): Observable<any> {
    return this.http.get(`${this.apiUrl}/notifications/unread-count`, {
      headers: this.getHeaders()
    });
  }

  markNotificationRead(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/notifications/${id}/read`, {}, {
      headers: this.getHeaders()
    });
  }

  markAllNotificationsRead(): Observable<any> {
    return this.http.put(`${this.apiUrl}/notifications/mark-all-read`, {}, {
      headers: this.getHeaders()
    });
  }

  clearAllNotifications(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/notifications/clear-all`, {
      headers: this.getHeaders()
    });
  }

  createEventPayment(eventId: number, amount: number, currency: string = 'INR', paymentMethod: string = 'CREDIT_CARD', transactionId?: string, description?: string): Observable<any> {
    const payload: any = {
      eventId: eventId,
      amount: amount,
      currency: currency,
      paymentMethod: paymentMethod
    };
    if (transactionId) {
      payload.transactionId = transactionId;
    }
    if (description) {
      payload.description = description;
    }
    return this.http.post(`${this.apiUrl}/event-registrations/dummy-payment`, payload, {
      headers: this.getHeaders()
    });
  }

  // Plan Feature endpoints
  getPlanFeatures(): Observable<any> {
    return this.http.get(`${this.apiUrl}/plan-features`, {
      headers: this.getHeaders()
    });
  }

  getActivePlanFeatures(): Observable<any> {
    return this.http.get(`${this.apiUrl}/plan-features/active`, {
      headers: this.getHeaders()
    });
  }

  getPlanFeaturesByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/plan-features/category/${category}`, {
      headers: this.getHeaders()
    });
  }

  getPlanFeatureById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/plan-features/${id}`, {
      headers: this.getHeaders()
    });
  }

  getPlanFeatureByCode(code: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/plan-features/code/${code}`, {
      headers: this.getHeaders()
    });
  }

  getPlanFeaturesByPlan(planId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/plan-features/plan/${planId}`, {
      headers: this.getHeaders()
    });
  }

  createPlanFeature(feature: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/plan-features`, feature, {
      headers: this.getHeaders()
    });
  }

  updatePlanFeature(id: number, feature: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/plan-features/${id}`, feature, {
      headers: this.getHeaders()
    });
  }

  deletePlanFeature(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/plan-features/${id}`, {
      headers: this.getHeaders()
    });
  }

  assignFeatureToPlan(featureId: number, planId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/plan-features/assign?featureId=${featureId}&planId=${planId}`, {}, {
      headers: this.getHeaders()
    });
  }

  removeFeatureFromPlan(featureId: number, planId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/plan-features/assign?featureId=${featureId}&planId=${planId}`, {
      headers: this.getHeaders()
    });
  }

  assignFeaturesToPlan(planId: number, featureIds: number[]): Observable<any> {
    return this.http.put(`${this.apiUrl}/plan-features/plan/${planId}/assign`, featureIds, {
      headers: this.getHeaders()
    });
  }
}

