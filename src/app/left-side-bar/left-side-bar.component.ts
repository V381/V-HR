import { Component, ViewChild, Output, EventEmitter} from '@angular/core';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ["./left-side-bar.component.scss"],
  animations: [
    trigger('slideOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':leave', [
        animate('0.3s', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class LeftSideBarComponent {
  @ViewChild(ToggleButtonComponent) toggleButton!: ToggleButtonComponent;
  @Output() triggerMainAnimation = new EventEmitter<string>()

  isLeftSideBarOpen = true;

  toggleLeftSideBar() {
    this.isLeftSideBarOpen = !this.isLeftSideBarOpen;
    this.triggerMainAnimation.emit('AnimationOn');
  }
}
