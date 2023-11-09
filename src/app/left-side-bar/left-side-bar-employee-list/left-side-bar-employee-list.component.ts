import { Component, Input} from '@angular/core';
import { EmployeeDataService } from 'src/app/left-side-bar-employee.service';
import { EmployeHeaderService } from 'src/app/employe-header.service';
import { EmployeFormService } from 'src/app/employe-form.service';
import { EmployeeListService } from 'src/app/employee-list-service.service';
import { EmployeeListHeader } from 'src/app/employee-header-list-service.service';
import { Employee } from 'src/app/models/employee.interface';

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
  names: Employee[] = []; 
  usedIds: Set<number> = new Set()
  filteredNames: Employee[] = [];
  @Input() namesToFilter: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchText: string = "";

  constructor(
    private employeeListHeader: EmployeeListHeader,
    private employeeDataService: EmployeeDataService, 
    private employeHeaderService: EmployeHeaderService, 
    private employeeFormService: EmployeFormService,
    private employeeListService: EmployeeListService) {
      
    }

  ngOnInit(): void {
    this.subscribeToSharedValue();
    this.subscribeToNames();
    this.employeeListService.employees$.subscribe(employees => {
      this.filteredEmployees = employees;
    });

  }
  filterEmployees() {
    this.names.forEach(employee => {
      employee.isFiltered = !employee.name.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  private subscribeToSharedValue(): void {
    this.employeeDataService.sharedValue$.subscribe((data: EmployeeData) => {
      this.sharedValue = data.name;
      this.sharedAddress = data.address;
  
      let id = 1;
      while (this.usedIds.has(id)) {
        id++;
      }
  
      const existingEmployee = this.names.find((employee) => employee.name === this.sharedValue);

      if (!existingEmployee && this.sharedValue.length > 0) {
        this.usedIds.add(id);
  
        this.names.unshift({
          id: id,
          name: this.sharedValue,
          address: this.sharedAddress,
          typeOfVacation: []
        });
      }
    });
  }
  
  private subscribeToNames(): void {
    this.employeeListService.names$.subscribe((names) => {
      this.names = names;
    });
  }
  addEmployeeToHeader(emp: string) {
    this.employeeListHeader.updateEmployeeList(emp)
    this.employeeListHeader.updateEmployeHeader(emp)
    const existingEmployee = this.names.find((employee) => employee.name === emp);
    
    this.employeeListService.names$.subscribe(val => {
      for (const employee of val) {
        if (employee.name === emp) {
          if (existingEmployee) {
            val = val.filter(name => name.name !== employee.name);
          }
          this.employeHeaderService.addEmployeeToHeader({
            name: employee.name,
            id: employee.id,
            address: employee.address,
            typeOfVacation: []
          })
        }
        this.employeeFormService.showEmployeeForm(employee);
      }
  });
    this.names.forEach((val, i) => {
      if (val.name === emp) {
        this.employeeFormService.showEmployeeForm(this.names[i]);
        this.sharedValue = val.name;
      }
    });
  }    
}
