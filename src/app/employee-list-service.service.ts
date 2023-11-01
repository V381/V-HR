import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Employee {
  id: number;
  name: string;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
  private namesSubject = new BehaviorSubject<Employee[]>([]);
  names$ = this.namesSubject.asObservable();

  setNames(names: Employee[]) {
    this.namesSubject.next(names);
  }
}