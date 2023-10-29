import { Component } from '@angular/core';
import { EmployeHeaderService } from '../employe-header.service';

@Component({
  selector: 'app-employe-header',
  templateUrl: './employe-header.component.html',
  styleUrls: ['./employe-header.component.scss']
})
export class EmployeHeaderComponent {
  
  employees: string[] = [];

  constructor(private employeHeaderService: EmployeHeaderService) {
    this.employeHeaderService.sharedValue$.subscribe((value) => {
      if (value.length > 0) {
        this.employees.push(value);
        const uniqueEmployee = new Set(this.employees);
        this.employees = Array.from(uniqueEmployee);
      }
    });
  }
}
