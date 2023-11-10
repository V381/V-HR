import { Component, OnDestroy } from '@angular/core';
import { EmployeFormService } from '../employe-form.service';
import { TypeAndReason } from '../models/employee.interface';
import { Employee } from '../models/employee.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent implements OnDestroy {
  employee: Employee = {
    id: 0,
    name: '',
    address: '',
    numberOfVacationDays: '',
    dateOfBirth: new Date(),
    company: ''
  };
  typeAndReason: TypeAndReason[] = [];
  private employeeSubscription: Subscription;

  constructor(private employeeFormService: EmployeFormService) {
    this.employeeSubscription = this.employeeFormService.sharedValue$.subscribe((val) => {
      this.employee = val as Employee;
    });
  }

  ngOnDestroy(): void {
    this.employeeSubscription.unsubscribe();
  }
  
  addTypeAndReason() {
    this.typeAndReason.push({
      id: 0,
      items: [{
        from: "",
        to: "",
        type: ""
      }]
    })
  }

  checkIfDefined(): boolean {
    return !!this.employee.name && Object.keys(this.employee).length > 0;
  }
}
