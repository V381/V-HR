import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { LeftSideBarEmployeeInputComponent } from './left-side-bar/left-side-bar-employee-input/left-side-bar-employee-input.component';
import { LeftSideBarSubmitNameBtnComponent } from './left-side-bar/left-side-bar-submit-name-btn/left-side-bar-submit-name-btn.component';
import { LeftSideBarEmployeeListComponent } from './left-side-bar/left-side-bar-employee-list/left-side-bar-employee-list.component';
import { EmployeHeaderComponent } from './employe-header/employe-header.component';
import { MainFormComponent } from './main-form/main-form.component';
import { TypeOfVacationComponent } from './main-form/type-of-vacation/type-of-vacation.component';
import { ToggleButtonComponent } from './left-side-bar/toggle-button/toggle-button.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    LeftSideBarEmployeeInputComponent,
    LeftSideBarSubmitNameBtnComponent,
    LeftSideBarEmployeeListComponent,
    EmployeHeaderComponent,
    MainFormComponent,
    TypeOfVacationComponent,
    ToggleButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
