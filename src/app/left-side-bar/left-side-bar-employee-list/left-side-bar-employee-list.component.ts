import { Component } from '@angular/core';
import { EmployeeDataService } from 'src/app/left-side-bar-employee.service';

@Component({
  selector: 'app-left-side-bar-employee-list',
  templateUrl: './left-side-bar-employee-list.component.html',
  styleUrls: ['./left-side-bar-employee-list.component.scss']
})
export class LeftSideBarEmployeeListComponent {
  sharedValue: string = '';
  names: string[] = [];

  constructor(private employeeDataService: EmployeeDataService) {
    this.employeeDataService.sharedValue$.subscribe(value => {
      this.sharedValue = value;
      if (this.sharedValue.length > 0) {
        this.names.push(this.sharedValue);
      }
    });
  }
}
