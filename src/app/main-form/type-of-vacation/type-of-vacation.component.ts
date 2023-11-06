import { Component } from '@angular/core';
import { EmployeeListService } from 'src/app/employee-list-service.service';
import { Employee, VacationType } from 'src/app/models/employee.interface';

@Component({
  selector: 'app-type-of-vacation',
  templateUrl: './type-of-vacation.component.html',
  styleUrls: ['./type-of-vacation.component.scss']
})
export class TypeOfVacationComponent {
  list: { type: string; items: Employee[] }[] = [];
  newVacationType: VacationType = { type: 'New Type', items: [] };
  selectedEmployee: Employee | null = null;

  constructor(private employeeListService: EmployeeListService) {
    this.addToList();
  }

  addToList() {
    this.employeeListService.names$.subscribe((val: Employee[]) => {
      if (val) {
        this.list = this.transformToExpectedStructure(val);
      }
    });
  }
  
  private transformToExpectedStructure(employees: Employee[]): { type: string; items: Employee[] }[] {
    const type = 'VacationTypeA'; 
    return [{ type, items: employees }];
  }
  addNewVacationType() {
    if (this.list.length > 0) {
      this.list.forEach((vacationType) => {
        vacationType.items.forEach((employee) => {
          if (!employee.typeOfVacation) {
            employee.typeOfVacation = [];
          }
          const newVacationType = { type: this.newVacationType.type, items: [] };
          employee.typeOfVacation.push(newVacationType);
        });
      });
    } else {
      this.list.push({ type: "dummyTestItem", items: [] });
    }
  }
}
