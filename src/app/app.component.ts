import { Component } from '@angular/core';
import { EmployeFormService } from './employe-form.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'V-HR';
  isThereEmploye: boolean = false;
  eventDate: string = "";
  mainContentState: 'collapsed' | 'expanded' = 'collapsed';

  constructor(private employeeForm: EmployeFormService) {
    this.employeeForm.sharedValue$.subscribe(val => {
      if (Object.keys(val).length > 0) {
        this.isThereEmploye = true;
      }
    });
  }
  catchChildEvent(eventData: string) {
    console.log(eventData);
  
    if (eventData === 'AnimationOn') {
      this.mainContentState = 'expanded';
    } else {
      this.mainContentState = 'collapsed';
    }
  }
}
