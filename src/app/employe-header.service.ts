import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeHeaderService {

  private sharedValueSubject = new BehaviorSubject<{ name: string, id: number, address: string}>({ name: '', id: 0, address: "" });
  sharedValue$ = this.sharedValueSubject.asObservable();
  employes: string[] = [];

  addEmployeeToHeader(employee: {name: string, id: number, address: string}) {
    this.sharedValueSubject.next(employee);
  }
}
