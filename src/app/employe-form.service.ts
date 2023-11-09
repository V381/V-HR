import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeFormService {

  private sharedValueSubject = new BehaviorSubject<object>({});
  sharedValue$ = this.sharedValueSubject.asObservable();

  showEmployeeForm(employee: object) {
    this.sharedValueSubject.next(employee)
  }
  closeForm() {
    this.sharedValueSubject.next({});
  }
}
