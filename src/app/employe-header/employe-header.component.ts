import { Component } from '@angular/core';
import { EmployeHeaderService } from '../employe-header.service';
import { EmployeFormService } from '../employe-form.service';
import { EmployeeListService } from '../employee-list-service.service';
import { EmployeeListHeader } from '../employee-header-list-service.service';

interface Employee {
  id: number,
  name: string;
  address: string
}

@Component({
  selector: 'app-employe-header',
  templateUrl: './employe-header.component.html',
  styleUrls: ['./employe-header.component.scss']
})
export class EmployeHeaderComponent {
  
  employees: Employee[] = [];
  uniqueEmployeeIds = new Set<number>();
  selectedItem: string = "";

  constructor(private employeeListService: EmployeeListService, private employeHeaderService: EmployeHeaderService, private employeeListHeader: EmployeeListHeader, private employeeFormService: EmployeFormService) {
    this.employeeListHeader.employeeList$.subscribe(val => {
      this.selectedItem = val;
    });

    this.employeHeaderService.sharedValue$.subscribe((value) => {
      if (value.id && !this.uniqueEmployeeIds.has(value.id)) {
        this.employees.push(value); // Updated to 'employees'
        this.uniqueEmployeeIds.add(value.id);
      }
    });
  }
  showEmployeeForm(employee: Employee) {
    this.selectedItem = employee.name;
    this.employeeListService.names$.subscribe((value) => {
      value.forEach(correctEmployee => {
        if (employee.id === correctEmployee.id) {
          this.employeeFormService.showEmployeeForm(correctEmployee);
        }
      });
    });
  }  
}
