import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeHeaderService {

  private sharedValueSubject = new BehaviorSubject<string>('');
  sharedValue$ = this.sharedValueSubject.asObservable();
  employes: string[] = [];

  addEmployeeToHeader(value: string) {
    this.sharedValueSubject.next(value);
  }
}
