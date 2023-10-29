import { Component } from '@angular/core';
import { EmployeeDataService } from 'src/app/left-side-bar-employee.service';

@Component({
  selector: 'app-left-side-bar-submit-name-btn',
  templateUrl: './left-side-bar-submit-name-btn.component.html',
  styleUrls: ['./left-side-bar-submit-name-btn.component.scss']
})
export class LeftSideBarSubmitNameBtnComponent {
  storedInputValue: string = '';

  constructor(private employeeDataService: EmployeeDataService) {}

  addEmployee() {
    this.storedInputValue = this.employeeDataService.getEmployeeValue();
    this.employeeDataService.setSharedValue(this.storedInputValue);
  }
}
