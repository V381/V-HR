import { Component, OnDestroy } from '@angular/core';
import { EmployeFormService } from '../employe-form.service';
import { TypeAndReason } from '../models/employee.interface';
import { Employee } from '../models/employee.interface';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

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
  employeeForm!: FormGroup;
  typeAndReasons: { [key: string]: TypeAndReason[] } = {};
  private employeeSubscription: Subscription;

  constructor(private employeeFormService: EmployeFormService, private fb: FormBuilder) {
    this.employeeSubscription = this.employeeFormService.sharedValue$.subscribe((val) => {
      this.employee = val as Employee;
    });
    this.employeeForm = this.fb.group({
      reasons: this.fb.array([]),
    });
  }

  ngOnDestroy(): void {
    this.employeeSubscription.unsubscribe();
  }

  addTypeAndReason() {
    const currentEmployeeName = this.employee ? this.employee.name : undefined;
    if (currentEmployeeName) {
      if (!this.typeAndReasons[currentEmployeeName]) {
        this.typeAndReasons[currentEmployeeName] = [];
      }
      this.typeAndReasons[currentEmployeeName].push({
        id: this.employee.id,
        from: '',
        to: '',
        type: ''
      });
    }
  }

  checkIfDefined(): boolean {
    return !!this.employee.name && Object.keys(this.employee).length > 0;
  }

  get reasonsArray() {
    const currentEmployeeName = this.employee ? this.employee.name : undefined;
    return currentEmployeeName ? this.typeAndReasons[currentEmployeeName] : [];
  }
  tandr() {
    return Object.keys(this.typeAndReasons);
  }
}