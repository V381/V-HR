import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeListHeader {
  private employeeListSource = new BehaviorSubject<any>(null);
  employeeList$ = this.employeeListSource.asObservable();

  private employeHeaderSource = new BehaviorSubject<any>(null);
  employeHeader$ = this.employeHeaderSource.asObservable();

  private typeOfVacationSource = new BehaviorSubject<any>(null);
  typeOfVacation$ = this.typeOfVacationSource.asObservable();

  updateEmployeeList(employeeList: any) {
    this.employeeListSource.next(employeeList);
  }

  updateEmployeHeader(headerData: any) {
    this.employeHeaderSource.next(headerData);
  }

  updateEmployeeTypeOfVacation(typeOfVacation: any) {
    this.typeOfVacationSource.next(typeOfVacation);
  }
}
