import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Project, ViewState } from '../../models/interfaces';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-project-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-post.component.html',
  styleUrls: ['./project-post.component.css']
})
export class ProjectPostComponent {
  @Output() navigate = new EventEmitter<string>();

  newProject = { title: '', budget: '', description: '', techStackRaw: '' };
  currentUser: any = null;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private toastService: ToastService
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  onNavigate(view: string): void {
    this.navigate.emit(view);
  }

  submitProject(): void {
    const project: Project = {
      id: 'p_' + Date.now(),
      title: this.newProject.title,
      budget: this.newProject.budget,
      duration: 'TBD',
      techStack: this.newProject.techStackRaw.split(',').map(s => s.trim()),
      postedBy: this.currentUser?.name || 'Unknown',
      posterId: this.currentUser?.id || '',
      description: this.newProject.description,
      postedDate: new Date(),
      status: 'OPEN'
    };
    this.dataService.addProject(project);
    this.toastService.success('Your development project has been posted successfully!');
    this.onNavigate('BENCH');
  }
}



