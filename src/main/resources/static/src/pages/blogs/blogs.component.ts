import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPost, ViewState } from '../../models/interfaces';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  @Output() navigate = new EventEmitter<ViewState>();

  blogPosts: BlogPost[] = [];
  currentUser: any = null;

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    this.blogPosts = this.dataService.getBlogPosts();
  }

  onNavigate(view: ViewState): void {
    this.navigate.emit(view);
  }
}

