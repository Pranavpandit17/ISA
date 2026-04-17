import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '../../models/interfaces';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() navigate = new EventEmitter<ViewState>();

  onNavigate(view: ViewState | string): void {
    this.navigate.emit(view as ViewState);
  }
}

