import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Member, ViewState } from '../../models/interfaces';
import { DataService } from '../../services/data.service';
import { AuthService, User } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  @Output() openPayment = new EventEmitter<void>();

  members: Member[] = [];
  filteredMembers: Member[] = [];
  dirSearch = '';
  dirIndustryFilter = '';
  currentUser: User | null = null;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private toastService: ToastService
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    this.members = this.dataService.getMembers();
    this.filterMembers();
  }

  filterMembers(): void {
    this.filteredMembers = this.members.filter(m => {
      const matchesSearch = !this.dirSearch || 
        m.name.toLowerCase().includes(this.dirSearch.toLowerCase()) ||
        m.company.toLowerCase().includes(this.dirSearch.toLowerCase());
      const matchesIndustry = !this.dirIndustryFilter || m.industry === this.dirIndustryFilter;
      return matchesSearch && matchesIndustry && m.status === 'ACTIVE' && m.type !== 'ADMIN';
    });
  }

  onNavigate(view: string): void {
    this.navigate.emit(view);
  }

  onOpenPayment(): void {
    this.openPayment.emit();
  }

  connectWith(id: string): void {
    this.toastService.success('Connection Request Sent Successfully!');
  }
}



