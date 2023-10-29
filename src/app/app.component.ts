import { Component } from '@angular/core';
import { EmployeFormService } from './employe-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'V-HR';
  isThereEmploye: boolean = false;

  constructor(private employeeForm: EmployeFormService) {
    this.employeeForm.sharedValue$.subscribe(val => {
      if (val) {
        this.isThereEmploye = true;
      }
    });
  }

}
