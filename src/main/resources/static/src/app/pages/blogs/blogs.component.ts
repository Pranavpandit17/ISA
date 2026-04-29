import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
  @Output() navigate = new EventEmitter<string>();

  blogPosts: BlogPost[] = [];
  currentUser: any = null;
  pageHeading = 'Knowledge Hub';

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    this.blogPosts = this.dataService.getBlogPosts();
    this.pageHeading = this.route.snapshot.data['pageHeading'] ?? 'Knowledge Hub';
  }

  onNavigate(view: string): void {
    this.navigate.emit(view);
  }
}



