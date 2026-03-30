import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-approve-reject-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './approve-reject-modal.component.html',
  styleUrls: ['./approve-reject-modal.component.css']
})
export class ApproveRejectModalComponent {
  @Input() show = false;
  @Input() mode: 'APPROVE' | 'REJECT' = 'APPROVE';
  @Input() application: any = null;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<{ id: number; reason?: string }>();

  rejectionReason = '';

  onClose(): void {
    this.close.emit();
    this.rejectionReason = '';
  }

  onConfirm(): void {
    if (this.mode === 'REJECT' && !this.rejectionReason.trim()) {
      return;
    }

    this.confirm.emit({
      id: this.application?.id,
      reason: this.mode === 'REJECT' ? this.rejectionReason : undefined
    });
    this.onClose();
  }
}


