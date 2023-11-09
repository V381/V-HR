import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeHeaderService {
  private sharedValueSubject = new BehaviorSubject<{ name: string, id: number, address: string, typeOfVacation: [] }>({ name: '', id: 0, address: '', typeOfVacation: [] });
  sharedValue$ = this.sharedValueSubject.asObservable();

  addEmployeeToHeader(employee: { name: string, id: number, address: string, typeOfVacation: [] }) {
    this.sharedValueSubject.next(employee);
  }

  clearHeader() {
    this.sharedValueSubject.next({ name: '', id: 0, address: '', typeOfVacation: [] });
  }
}
