import { Component } from '@angular/core';
import { EmployeeDataService } from 'src/app/left-side-bar-employee.service';
import { EmployeHeaderService } from 'src/app/employe-header.service';
import { EmployeFormService } from 'src/app/employe-form.service';

@Component({
  selector: 'app-left-side-bar-employee-list',
  templateUrl: './left-side-bar-employee-list.component.html',
  styleUrls: ['./left-side-bar-employee-list.component.scss']
})
export class LeftSideBarEmployeeListComponent {
  sharedValue: string = '';
  names: string[] = [];

  constructor(private employeeDataService: EmployeeDataService, private employeHeaderService: EmployeHeaderService, private employeeFormService: EmployeFormService) {}

  ngOnInit(): void {
    this.subscribeToSharedValue();
    console.log("@@@");
  }

  private subscribeToSharedValue(): void {
    this.employeeDataService.sharedValue$.subscribe(value => {
      this.handleSharedValue(value);
    });
  }

  private handleSharedValue(value: any): void {
    this.sharedValue = value;
    if (this.sharedValue.length > 0) {
      this.names.unshift(this.sharedValue);
      this.sharedValue = "";
    }
  }
  addEmployeeToHeader(employee: string) {
    this.employeHeaderService.addEmployeeToHeader(employee);
    this.employeeFormService.showEmployeeForm(employee);
  }
}
