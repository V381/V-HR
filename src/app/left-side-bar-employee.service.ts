import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private sharedValueSubject = new BehaviorSubject<string>('');
  sharedValue$ = this.sharedValueSubject.asObservable();
  private employeeValue: string = '';

  setSharedValue(value: string) {
    this.sharedValueSubject.next(value);
  }

  setEmployeeValue(value: string) {
    this.employeeValue = value;
  }

  getEmployeeValue() {
    return this.employeeValue;
  }
}
