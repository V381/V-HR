import { Component } from '@angular/core';
import { EmployeFormService } from './employe-form.service';
import { IntroDescriptionComponent } from './intro-description/intro-description.component';
import { UserVisitService } from './user-visit.service';
import { MatDialog } from '@angular/material/dialog';
import { ListHeaderUpdate } from 'src/app/list-header-update.service';
import { updateRemovedState } from 'src/app/store/actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'V-HR';
  isThereEmploye: boolean = false;
  eventDate: string = "";
  mainContentState: 'collapsed' | 'expanded' = 'collapsed';

  constructor(
    private employeeForm: EmployeFormService, 
    private dialog: MatDialog,
    private userVisitService: UserVisitService) {
    this.employeeForm.sharedValue$.subscribe(val => {
      if (Object.keys(val).length > 0) {
        this.isThereEmploye = true;
      }
    });
  }
  
  ngOnInit() {
    if (!this.userVisitService.hasVisited) {
      this.openWelcomeDialog();
      this.userVisitService.markAsVisited();
    }
  }

  openWelcomeDialog() {
    const dialogRef = this.dialog.open(IntroDescriptionComponent, {
      width: '800px',
      height: '500px',
      disableClose: true,
      hasBackdrop: true,
      panelClass: 'custom-dialog-container'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
  catchChildEvent(eventData: string) {
    console.log(eventData);
  
    if (eventData === 'AnimationOn') {
      this.mainContentState = 'expanded';
    } else {
      this.mainContentState = 'collapsed';
    }
  }
}
