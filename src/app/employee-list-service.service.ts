import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee, VacationType } from './models/employee.interface';


@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
  private namesSubject = new BehaviorSubject<Employee[]>([]);
  names$ = this.namesSubject.asObservable();

  setNames(names: Employee[]) {
    this.namesSubject.next(names);
  }
  getNames(names: Employee[]) {
    this.namesSubject.next(names);
  }
}
