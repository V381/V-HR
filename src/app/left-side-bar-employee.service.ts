import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Employee } from './models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private sharedValueSubject = new BehaviorSubject<
  { name: string, address: string, numberOfVacationDays: string, company: string }>
  ({ name: '', address: '', numberOfVacationDays: "", company: "" });
  
  sharedValue$ = this.sharedValueSubject.asObservable();
  private employeeValue: string = '';
  private sharedAddressSubject = new BehaviorSubject<string>("");
  sharedAddressSubject$ = this.sharedAddressSubject.asObservable();
  private employeesSubject = new BehaviorSubject<Employee[]>([]);
  employees$ = this.employeesSubject.asObservable();

  setSharedValue(data: { name: string, address: string, numberOfVacationDays: string, company: string}) {
    this.sharedValueSubject.next(data);
  }

  setSharedAdress(value: string) {
    this.sharedAddressSubject.next(value);
  }

  setEmployeeValue(value: string) {
    this.employeeValue = value;
  }

  setEmployees(employees: Employee[]) {
    this.employeesSubject.next(employees);
  }

  getSharedValue(): any {
    return this.sharedValue$;
  }

  getEmployeeValue() {
    return this.employeeValue;
  }

}
    
