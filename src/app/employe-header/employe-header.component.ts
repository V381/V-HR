import { Component } from '@angular/core';
import { EmployeHeaderService } from '../employe-header.service';
import { EmployeFormService } from '../employe-form.service';
import { EmployeeListService } from '../employee-list-service.service';

interface Employee {
  name: string;
}

@Component({
  selector: 'app-employe-header',
  templateUrl: './employe-header.component.html',
  styleUrls: ['./employe-header.component.scss']
})
export class EmployeHeaderComponent {
  
  employees: Employee[] = [];
  selectedItem: string = "";

  constructor(private employeHeaderService: EmployeHeaderService, private employeeListService: EmployeeListService, private employeeFormService: EmployeFormService) {
    this.employeeListService.names$.subscribe(val => {
        for (const employee of val) {
          this.selectedItem = employee.name;
        }
    });
    this.employeHeaderService.sharedValue$.subscribe((value) => {
      if (value.name) {
        this.selectedItem = value.name;
        // Check if the employee is not already in the array
        if (!this.employees.some(e => e.name === value.name)) {
          this.employees.push(value);
        }
      }
    });
  }
  showEmployeeForm(employee: Employee) {
    this.employeeFormService.showEmployeeForm(employee);
    this.selectedItem = employee.name;
  }
}
