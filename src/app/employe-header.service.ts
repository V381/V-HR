import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeHeaderService {

  private sharedValueSubject = new BehaviorSubject<{ name: string}>({ name: '' });
  sharedValue$ = this.sharedValueSubject.asObservable();
  employes: string[] = [];

  addEmployeeToHeader(employee: {name: string}) {
    this.sharedValueSubject.next(employee);
  }
}
