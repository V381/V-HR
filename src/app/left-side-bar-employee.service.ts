import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private sharedValueSubject = new BehaviorSubject<{ name: string, address: string }>({ name: '', address: '' });
  sharedValue$ = this.sharedValueSubject.asObservable();
  private employeeValue: string = '';
  private sharedAddressSubject = new BehaviorSubject<string>("");
  sharedAddressSubject$ = this.sharedAddressSubject.asObservable();

  setSharedValue(data: { name: string, address: string }) {
    this.sharedValueSubject.next(data);
  }

  setSharedAdress(value: string) {
    this.sharedAddressSubject.next(value);
  }

  setEmployeeValue(value: string) {
    this.employeeValue = value;
  }

  getSharedValue(): any {
    return this.sharedValue$;
  }

  getEmployeeValue() {
    return this.employeeValue;
  }
}
