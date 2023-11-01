import { Component } from '@angular/core';
import { EmployeFormService } from '../employe-form.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})

export class MainFormComponent {
  employee: { name?: string, address?: string} = {}
  constructor(private employeeFormService: EmployeFormService) {
    this.employeeFormService.sharedValue$.subscribe((val) => {
      this.employee = val;
    });
  }

  checkIfDefined() : boolean {
    return Object.keys(this.employee).length > 0;
  }
}
