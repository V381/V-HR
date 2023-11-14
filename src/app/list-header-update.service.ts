import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from './models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class ListHeaderUpdate {
  private removeEmployeeSource = new Subject<Employee>();
  removeEmployee$ = this.removeEmployeeSource.asObservable();

  triggerRemoveEmployee(employee: Employee) {
    this.removeEmployeeSource.next(employee);
  }
}