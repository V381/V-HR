import { Component, OnDestroy } from '@angular/core';
import { EmployeeListService } from 'src/app/employee-list-service.service';
import { Employee, VacationType } from 'src/app/models/employee.interface';
import { EmployeHeaderService } from 'src/app/employe-header.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-type-of-vacation',
  templateUrl: './type-of-vacation.component.html',
  styleUrls: ['./type-of-vacation.component.scss']
})
export class TypeOfVacationComponent implements OnDestroy {
  newVacationType: VacationType = { type: 'New Type', items: [] };
  selectedEmployee: Employee | null = null;
  list: { type: string; items: Employee[] }[] = [];
  private ngUnsubscribe$ = new Subject<void>();

  constructor(
    private employeeListService: EmployeeListService,
    private employeHeaderService: EmployeHeaderService,
  ) {

    this.employeHeaderService.sharedValue$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((val) => {
        if (val) {
          if (!this.selectedEmployee) {
            this.selectedEmployee = val;
          }
          const selectedEmployee = this.findEmployeeByName(val);
          if (selectedEmployee) {
            this.selectEmployee(selectedEmployee);
          }
        }
      });

    this.addToList();
  }
  addToList() {
    this.employeeListService.names$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((val: Employee[]) => {
        if (val) {
          this.list = this.transformToExpectedStructure(val);
          if (val.length === 1) {
            this.selectEmployee(val[0]);
          }
        }
      });
  }

  private transformToExpectedStructure(employees: Employee[]): { type: string; items: Employee[] }[] {
    const type = 'VacationTypeA';
    return [{ type, items: employees }];
  }

  addNewVacationType() {
      if (this.selectedEmployee) {
        if (!this.selectedEmployee.typeOfVacation) {
          this.selectedEmployee.typeOfVacation = [];
        }
        const newVacationType = { type: this.newVacationType.type, items: [] };
        this.selectedEmployee.typeOfVacation.push(newVacationType);
      } 
    }

  selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  private findEmployeeByName(emp: Employee): Employee | null {
    for (const vacationType of this.list) {
      for (const employee of vacationType.items) {
        if (employee.name === emp.name) {
          return employee;
        }
      }
    }
    return null;
  }
  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
