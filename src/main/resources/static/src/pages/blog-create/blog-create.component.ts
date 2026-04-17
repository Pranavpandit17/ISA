import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogPost, ViewState } from '../../models/interfaces';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-blog-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent {
  @Output() navigate = new EventEmitter<ViewState>();

  newBlog = { title: '', category: 'Technology', excerpt: '', content: '' };
  currentUser: any = null;

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  onNavigate(view: ViewState): void {
    this.navigate.emit(view);
  }

  submitBlog(): void {
    const post: BlogPost = {
      id: 'b_' + Date.now(),
      title: this.newBlog.title,
      excerpt: this.newBlog.excerpt,
      authorName: this.currentUser?.name || 'Unknown',
      authorId: this.currentUser?.id || '',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      category: this.newBlog.category,
      readTime: '5 min',
      content: this.newBlog.content,
      likes: 0,
      status: 'PENDING'
    };
    this.dataService.addBlogPost(post);
    alert('Submitted');
    this.onNavigate('BLOGS');
  }
}

