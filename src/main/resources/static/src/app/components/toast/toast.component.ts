import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-24 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
      <div *ngFor="let toast of toasts; trackBy: trackById" 
           class="toast-item pointer-events-auto"
           [ngClass]="getToastClass(toast.type)">
        
        <div class="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all duration-500">
          <!-- Icon -->
          <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0" 
               [ngClass]="getIconBg(toast.type)">
            <span class="text-lg">{{ getIcon(toast.type) }}</span>
          </div>

          <!-- Message -->
          <div class="flex flex-col">
            <span class="text-[10px] font-black uppercase tracking-widest opacity-40">{{ toast.type }} Notification</span>
            <p class="text-sm font-bold text-slate-900 leading-tight">{{ toast.message }}</p>
          </div>

          <!-- Close -->
          <button (click)="removeToast(toast.id)" class="ml-4 text-slate-400 hover:text-slate-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .toast-item {
      animation: toast-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @keyframes toast-in {
      from { transform: translateX(100px); opacity: 0; scale: 0.9; }
      to { transform: translateX(0); opacity: 1; scale: 1; }
    }

    .toast-success div { background: rgba(240, 253, 244, 0.8); border-color: rgba(34, 197, 94, 0.1); }
    .toast-error div { background: rgba(254, 242, 242, 0.8); border-color: rgba(239, 68, 68, 0.1); }
    .toast-info div { background: rgba(239, 246, 255, 0.8); border-color: rgba(59, 130, 246, 0.1); }
    .toast-warning div { background: rgba(255, 251, 235, 0.8); border-color: rgba(245, 158, 11, 0.1); }
  `]
})
export class ToastComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toasts$.subscribe(t => this.toasts = t);
  }

  removeToast(id: number): void {
    this.toastService.remove(id);
  }

  trackById(index: number, toast: Toast): number {
    return toast.id;
  }

  getToastClass(type: string): string {
    return `toast-${type}`;
  }

  getIconBg(type: string): string {
    switch (type) {
      case 'success': return 'bg-green-500/10 text-green-600';
      case 'error': return 'bg-rose-500/10 text-rose-600';
      case 'info': return 'bg-blue-500/10 text-blue-600';
      case 'warning': return 'bg-amber-500/10 text-amber-600';
      default: return 'bg-slate-500/10 text-slate-600';
    }
  }

  getIcon(type: string): string {
    switch (type) {
      case 'success': return '✓';
      case 'error': return '✕';
      case 'info': return 'ℹ';
      case 'warning': return '⚠';
      default: return '•';
    }
  }
}
