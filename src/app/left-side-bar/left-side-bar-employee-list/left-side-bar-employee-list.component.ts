import { Component} from '@angular/core';
import { EmployeeDataService } from 'src/app/left-side-bar-employee.service';
import { EmployeHeaderService } from 'src/app/employe-header.service';
import { EmployeFormService } from 'src/app/employe-form.service';
import { EmployeeListService } from 'src/app/employee-list-service.service';

interface EmployeeData {
  name: string;
  address: string;
}

@Component({
  selector: 'app-left-side-bar-employee-list',
  templateUrl: './left-side-bar-employee-list.component.html',
  styleUrls: ['./left-side-bar-employee-list.component.scss']
})
export class LeftSideBarEmployeeListComponent implements EmployeeData{
  name: string = "";
  address: string = "";
  sharedValue: string = '';
  sharedAddress: string = '';
  names: { name: string, id: number, address: string }[] = [];
    id: number = 1;
  usedIds: Set<number> = new Set()

  constructor(private employeeDataService: EmployeeDataService, private employeHeaderService: EmployeHeaderService, private employeeFormService: EmployeFormService, private employeeListService: EmployeeListService) {}

  ngOnInit(): void {
    this.subscribeToSharedValue();
    this.subscribeToNames();
  }

  private subscribeToSharedValue(): void {
    this.employeeDataService.sharedValue$.subscribe((data: EmployeeData) => {
      this.sharedValue = data.name;
      this.sharedAddress = data.address;
    
        let id = 1;
        while (this.usedIds.has(id)) {
          id++;
        }
    
        const existingEmployee = this.names.find((employee) => employee.id === id);
    
        if (!existingEmployee && this.sharedValue.length > 0) {
          this.usedIds.add(id);
    
          this.names.unshift({
            id: id,
            name: this.sharedValue,
            address: this.sharedAddress,
          });
        }
    
      this.sharedValue = "";
      // this.addEmployeeToHeader(data.name);
    });
  }
  private subscribeToNames(): void {
    this.employeeListService.names$.subscribe((names) => {
      this.names = names;
    });
  }
  addEmployeeToHeader(employee: string) {
    this.employeeListService.names$.subscribe(val => {
      for (const employee of val) {
        this.employeHeaderService.addEmployeeToHeader({
          name: employee.name,
          id: employee.id,
          address: employee.address
        })
        this.employeeFormService.showEmployeeForm(employee);
      }
  });
    this.names.forEach((val, i) => {
      if (val.name === employee) {
        this.employeeFormService.showEmployeeForm(this.names[i]);
      }
    });
  }    
}
