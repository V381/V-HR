import { Component } from '@angular/core';

@Component({
  selector: 'app-type-of-vacation',
  templateUrl: './type-of-vacation.component.html',
  styleUrls: ['./type-of-vacation.component.scss']
})
export class TypeOfVacationComponent {
  list: object[] = [];

  addToList() {
    this.list.push({
      a: 1
    })
  }
}
