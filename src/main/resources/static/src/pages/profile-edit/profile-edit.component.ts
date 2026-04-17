import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewState } from '../../models/interfaces';
import { AuthService, User } from '../../services/auth.service';
import { MembershipService } from '../../services/membership.service';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  @Output() navigate = new EventEmitter<ViewState>();

  currentUser: User | null = null;
  selectedMembershipPlan: any = null;

  constructor(
    private authService: AuthService,
    private membershipService: MembershipService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.selectedMembershipPlan = this.membershipService.getSelectedPlan();
    this.membershipService.getSelectedPlan$().subscribe(plan => {
      this.selectedMembershipPlan = plan;
    });
  }

  onNavigate(view: ViewState): void {
    this.navigate.emit(view);
  }

  saveProfile(): void {
    alert('Saved');
    this.onNavigate('DASHBOARD');
  }
}

