import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ApproveRejectModalComponent } from '../../components/modals/approve-reject-modal/approve-reject-modal.component';
import { ApplicationDetailModalComponent } from '../../components/modals/application-detail-modal/application-detail-modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-management',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.css']
})
export class MemberManagementComponent implements OnInit {
  activeTab: 'APPLICATIONS' | 'APPROVED' | 'REJECTED' = 'APPLICATIONS';
  
  applications: any[] = [];
  approvedMembers: any[] = [];
  rejectedApplications: any[] = [];
  pendingCount = 0;
  totalMembers = 0;
  
  isLoading = false;
  errorMessage = '';

  @Output() openDetail = new EventEmitter<any>();
  @Output() openApprove = new EventEmitter<any>();
  @Output() openReject = new EventEmitter<any>();

  constructor(private apiService: ApiService,private toastr: ToastrService) {}
  

  ngOnInit(): void {
    console.log('hello')
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.apiService.getMembershipApplications().subscribe({
      next: (response: any) => {
        this.applications = response.filter((app: any) => app.status === 'PENDING');
        this.pendingCount = response.reduce((acc:any,obj:any)=>{
          if(obj.status=== 'PENDING')
          {
            return acc+1;
          }
          return acc;
        },0)
        console.log(this.pendingCount)
        this.apiService.setPendingCount(this.pendingCount);
        this.rejectedApplications = response.filter((app: any) => app.status === 'REJECTED');
        console.log('re',this.rejectedApplications)
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading applications';
        this.isLoading = false;
      }
    });

    this.apiService.getApprovedMembers().subscribe({
      next: (response: any) => {
        this.approvedMembers = response;
        this.apiService.setTotalMembers(response.length);
      },
      error: (error) => {
        console.error('Error loading approved members:', error);
      }
    });
  }

  openApproveModal(application: any): void {
    this.openApprove.emit(application);
  }

  openRejectModal(application: any): void {
    this.openReject.emit(application);
  }

  openDetailModal(application: any): void {
    this.openDetail.emit(application);
  }

  closeModals(): void {
    // Handled by dashboard now
  }

  onDetailApprove(application: any): void {
    this.openApprove.emit(application);
  }

  onDetailReject(application: any): void {
    this.openReject.emit(application);
  }

  onApproveConfirm(data: { id: number; reason?: string }): void {
    this.isLoading = true;
    this.apiService.approveApplication(data.id).subscribe({
      next: () => {
        this.loadData();
        this.toastr.success(
          'Application approved successfully! Member and user account created.',
          'Approved'
        );
        this.closeModals();
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Error approving application';
        this.isLoading = false;
      }
    });
  }

  onRejectConfirm(data: { id: number; reason?: string }): void {
    if (!data.reason || !data.reason.trim()) {
      this.toastr.error('Please provide a reason for rejection', 'Error');
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.apiService.rejectApplication(data.id, data.reason).subscribe({
      next: () => {
        this.isLoading = false;
        this.loadData();
        this.toastr.success('Application rejected successfully', 'Rejected');
        this.closeModals();
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Error rejecting application. Please try again.';
        this.toastr.error(this.errorMessage, 'Error');
        console.error('Error rejecting application:', error);
      }
    });
  }

  setTab(tab: 'APPLICATIONS' | 'APPROVED' | 'REJECTED'): void {
    this.activeTab = tab;
  }

  getMemberPlanName(member: any): string {
    if (!member) return 'No Plan';
    return (
      member.activePlanName ||
      member.currentPlanName ||
      member.planName ||
      member.selectedPlanName ||
      'No Plan'
    );
  }
}



