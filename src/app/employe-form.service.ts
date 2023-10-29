import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeFormService {

  private sharedValueSubject = new BehaviorSubject<string>('');
  sharedValue$ = this.sharedValueSubject.asObservable();

  showEmployeeForm(employee: string) {
    this.sharedValueSubject.next(employee);
  }
}
