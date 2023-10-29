import { Component } from '@angular/core';
import { EmployeHeaderService } from '../employe-header.service';
import { EmployeFormService } from '../employe-form.service';

@Component({
  selector: 'app-employe-header',
  templateUrl: './employe-header.component.html',
  styleUrls: ['./employe-header.component.scss']
})
export class EmployeHeaderComponent {
  
  employees: string[] = [];
  employee: string = "";
  constructor(private employeHeaderService: EmployeHeaderService, private employeeFormService: EmployeFormService) {
    this.employeHeaderService.sharedValue$.subscribe((value) => {
      if (value.length > 0) {
        this.employees.push(value);
        const uniqueEmployee = new Set(this.employees);
        this.employees = Array.from(uniqueEmployee);
      }
    });
  }
  showEmployeeForm(employee: string) {
    this.employeeFormService.showEmployeeForm(employee);
  }
}
