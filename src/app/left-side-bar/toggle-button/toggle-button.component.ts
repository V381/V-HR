import { Component, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  animations: [
    trigger('rotateAnimation', [
      state('normal', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('normal => rotated', animate('300ms ease-in')),
      transition('rotated => normal', animate('300ms ease-out')),
    ]),
  ],
})
export class ToggleButtonComponent {
  @Output() toggle = new EventEmitter<void>();
  rotateState: 'normal' | 'rotated' = 'normal';

  toggleIcon() {
    this.rotateState = this.rotateState === 'normal' ? 'rotated' : 'normal';
  }
}