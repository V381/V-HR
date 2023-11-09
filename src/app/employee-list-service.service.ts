import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Employee } from './models/employee.interface';


@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
  private namesSubject = new BehaviorSubject<Employee[]>([]);
  names$ = this.namesSubject.asObservable();

  private employeesSubject = new BehaviorSubject<Employee[]>([]);
  employees$ = this.employeesSubject.asObservable();

  setNames(names: Employee[]) {
    this.namesSubject.next(names);
  }
  getNames(names: Employee[]) {
    this.namesSubject.next(names);
  }

  setEmployees(employees: Employee[]) {
    this.employeesSubject.next(employees);
  }
}
