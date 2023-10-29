import { Component } from '@angular/core';
import { EmployeeDataService } from 'src/app/left-side-bar-employee.service';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-left-side-bar-employee-input',
  templateUrl: './left-side-bar-employee-input.component.html',
  styleUrls: ['./left-side-bar-employee-input.component.scss']
})
export class LeftSideBarEmployeeInputComponent {
  employeeName: string = "";
  private inputChange = new Subject<string>();

  constructor(private employeeDataService: EmployeeDataService) {
    this.inputChange.pipe(debounceTime(0)).subscribe(value => {
      this.employeeDataService.setEmployeeValue(value);
    });
  }

  storeEmployeeName() {
    this.employeeDataService.setSharedValue(this.employeeName);
  }

  onInputChange() {
    this.inputChange.next(this.employeeName);
  }
}
