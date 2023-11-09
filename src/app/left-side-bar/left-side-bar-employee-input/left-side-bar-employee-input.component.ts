import { Component, Input } from '@angular/core';
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
  @Input() placeholderText: string = "";
 
  constructor(private employeeDataService: EmployeeDataService) {
    this.inputChange.pipe(debounceTime(0)).subscribe(value => {
      this.employeeDataService.setEmployeeValue(value);
    });
  }

  storeEmployeeName() {
    this.employeeDataService.setSharedValue({ name: this.employeeName, address: ""});
  }

  setEmployee() {
    this.inputChange.next(this.employeeName);
  }
}
