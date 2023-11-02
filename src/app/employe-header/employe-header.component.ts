import { Component } from '@angular/core';
import { EmployeHeaderService } from '../employe-header.service';
import { EmployeFormService } from '../employe-form.service';
import { EmployeeListService } from '../employee-list-service.service';

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

  constructor(private employeHeaderService: EmployeHeaderService, private employeeListService: EmployeeListService, private employeeFormService: EmployeFormService) {
    this.employeeListService.names$.subscribe(val => {
      for (const employee of val) {
        this.selectedItem = employee.name;
      }
    });
    this.employeHeaderService.sharedValue$.subscribe((value) => {
      if (value.id && !this.uniqueEmployeeIds.has(value.id)) {
        this.employees.push(value);
        this.uniqueEmployeeIds.add(value.id);
      }
    });
  }
  showEmployeeForm(employee: Employee) {
    this.employeeListService.names$.subscribe((value) => {
      value.forEach(correctEmployee => {
        if (employee.id === correctEmployee.id) {
          this.employeeFormService.showEmployeeForm(correctEmployee);
        }
      });
      this.selectedItem = employee.name;
    });
  }
}
