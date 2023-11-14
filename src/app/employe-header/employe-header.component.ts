import { Component, OnDestroy } from '@angular/core';
import { EmployeHeaderService } from '../employe-header.service';
import { EmployeFormService } from '../employe-form.service';
import { EmployeeListService } from '../employee-list-service.service';
import { EmployeeListHeader } from '../employee-header-list-service.service';
import { ListHeaderUpdate } from '../list-header-update.service';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../models/employee.interface';

@Component({
  selector: 'app-employe-header',
  templateUrl: './employe-header.component.html',
  styleUrls: ['./employe-header.component.scss'],
})
export class EmployeHeaderComponent implements OnDestroy {
  employees: Employee[] = [];
  uniqueEmployeeIds = new Set<number>();
  selectedItem: string = '';
  private ngUnsubscribe$ = new Subject<void>();

  constructor(
    private employeeListService: EmployeeListService,
    private employeHeaderService: EmployeHeaderService,
    private employeeListHeader: EmployeeListHeader,
    private employeeFormService: EmployeFormService,
    private listHeaderUpdate: ListHeaderUpdate
  ) {
    this.employeeListHeader.employeeList$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((val) => {
        this.selectedItem = val;
      });
      this.employeHeaderService.sharedValue$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((value) => {
        if (value.id && !this.uniqueEmployeeIds.has(value.id)) {
          this.employees.push(value);
          this.uniqueEmployeeIds.add(value.id);
        } 
      });
      this.listHeaderUpdate.removeEmployee$.subscribe(name => {
        this.removeEmployeeFromHeader(name);
      });
  }

  showEmployeeForm(employee: Employee) {
    this.selectedItem = employee.name;
    this.employeeListService.names$
        .pipe(takeUntil(this.ngUnsubscribe$))
        .subscribe((value) => {
          const correctEmployee = value.find(emp => emp.id === employee.id);

          if (correctEmployee) {
            this.employeeFormService.showEmployeeForm(correctEmployee);
            this.employeeListHeader.updateEmployeeTypeOfVacation(correctEmployee);
          } 
    });
  }

  removeEmployeeFromHeader(employee: Employee) {
    this.employeHeaderService.clearHeader();
    if (this.selectedItem) {
      const removedIndex = this.employees.findIndex((emp) => emp.id === employee.id);
      if (removedIndex !== -1) {
        this.employees.splice(removedIndex, 1);
        this.uniqueEmployeeIds.delete(employee.id);
        if (this.employees.length > 0) {
          let nextIndex = removedIndex;
          if (nextIndex >= this.employees.length) {
            nextIndex = this.employees.length - 1;
          }
          this.showEmployeeForm(this.employees[nextIndex]);
        } else {
          this.employeeFormService.closeForm();
        }
      }
    }
  }
  
  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
