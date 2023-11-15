import { Component, OnDestroy } from '@angular/core';
import { EmployeFormService } from '../employe-form.service';
import { TypeAndReason } from '../models/employee.interface';
import { Employee } from '../models/employee.interface';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { AppState } from '../models/AppState.interface';
import { updateRemovedState } from 'src/app/store/actions';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent implements OnDestroy {
  employee: Employee = {
    id: 0,
    name: '',
    address: '',
    numberOfVacationDays: '',
    dateOfBirth: new Date(),
    company: '',
    comment: "",
    checked: false
  };
  employeeForm!: FormGroup;
  typeAndReasons: { [key: string]: TypeAndReason[] } = {};
  private employeeSubscription: Subscription;
  dateValuesChanged = false;
  daysLeft: number = 0;
  totalDaysTaken: number = 0;
  totalRemainingDays: number = 0;
  showVacationDaysMessage: boolean = false;
  removed: boolean = false;

  constructor(private employeeFormService: EmployeFormService, private fb: FormBuilder, private store: Store<AppState>) {
    this.employeeSubscription = this.employeeFormService.sharedValue$.subscribe((val) => {
      this.employee = val as Employee;
    });
    this.employeeForm = this.fb.group({
      reasons: this.fb.array([]),
    });
    this.store.select(state => state.app.removed).subscribe(removed => {
      this.employee.checked = removed;
    });
  }

  ngOnDestroy(): void {
    this.employeeSubscription.unsubscribe();
  }

  toggleRemovedState() {
    this.store.dispatch(updateRemovedState({ removed: true }));
  }

  addTypeAndReason() {
  const currentEmployeeName = this.employee ? this.employee.name : undefined;

  if (currentEmployeeName) {
    if (!this.typeAndReasons[currentEmployeeName]) {
      this.typeAndReasons[currentEmployeeName] = [];
    }

    const newReason: TypeAndReason = {
      id: this.employee.id,
      from: '',
      to: '',
      type: ''
    };

    this.typeAndReasons[currentEmployeeName].push(newReason);
  }
}

  
  
  checkIfDefined(): boolean {
    return !!this.employee.name && Object.keys(this.employee).length > 0;
  }

  tandr() {
    return Object.keys(this.typeAndReasons);
  }
  calculateDaysDiffWithoutWeekends(fromDate: Date, toDate: Date): number {
    let daysDiff = 0;
    while (fromDate <= toDate) {
      const dayOfWeek = fromDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        daysDiff++;
      }
      fromDate.setDate(fromDate.getDate() + 1);
    }
    return daysDiff;
  }

  calculateDaysAndRemaining(reason: any): { daysTaken: number, remainingDays: number } {
    const fromDate = this.parseDate(reason.from);
    const toDate = this.parseDate(reason.to);

    if (!fromDate || !toDate) {
      return { daysTaken: 0, remainingDays: 0 }; 
    }
  
    const daysDiff = this.calculateDaysDiffWithoutWeekends(fromDate, toDate);
  
    reason.daysTaken = daysDiff;
  
    const remainingDays = Number(this.employee.numberOfVacationDays) - daysDiff;
  
    return { daysTaken: daysDiff, remainingDays: remainingDays > 0 ? remainingDays : 0 };
  }
  
  
  calculateTotalDaysAndRemaining(): { totalDaysTaken: number, totalRemainingDays: number } {
    let totalDaysTaken = 0;
    let totalRemainingDays = Number(this.employee.numberOfVacationDays);
    const uniqueDays = new Set<number>();
  
    if (this.reasonsArray !== undefined) {
      for (const reason of this.reasonsArray) {
        const daysAndRemaining = this.calculateDaysAndRemaining(reason)
  
        for (let i = 0; i < daysAndRemaining.daysTaken; i++) {
          const day = new Date(reason.from).getDate() + i;
  
          if (uniqueDays.has(day)) {
            totalRemainingDays++;
          } else {
            uniqueDays.add(day);
          }
        }
  
        totalDaysTaken += daysAndRemaining.daysTaken;
        totalRemainingDays -= daysAndRemaining.daysTaken;
      }
    }
  
    this.totalDaysTaken = totalDaysTaken;
    this.totalRemainingDays = totalRemainingDays;
  
    return { totalDaysTaken, totalRemainingDays };
  }
  
  
  
  get reasonsArray() {
    const currentEmployeeName = this.employee ? this.employee.name : undefined;
    return currentEmployeeName ? this.typeAndReasons[currentEmployeeName] : [];
  }
  
  parseDate(dateString: string): Date | undefined {
    if (!dateString) {
      return undefined;
    }
  
    const parsedDate = new Date(dateString);
  
    return isNaN(parsedDate.getTime()) ? undefined : parsedDate;
  }
  
  calculateDaysLeft(reason: any): number {
    if (!this.dateValuesChanged) {
      return 0; 
    }
    const fromDate = new Date(reason.from);
    const toDate = new Date(reason.to);
    const daysDiff = this.calculateDaysDiffWithoutWeekends(fromDate, toDate);
    reason.daysTaken = daysDiff;
    const remainingDays = Number(this.employee.numberOfVacationDays) - daysDiff;
    this.daysLeft = daysDiff;
    return remainingDays > 0 ? daysDiff : 0;
  }
  
  onDateChange() {
    this.dateValuesChanged = true;
  }

  isNumberOfVacationDaysPopulated(): boolean {
    if (!this.employee.numberOfVacationDays) {
      this.showVacationDaysMessage = true;
      return false;
    }
    this.showVacationDaysMessage = false;
    return true;
  }
  
}