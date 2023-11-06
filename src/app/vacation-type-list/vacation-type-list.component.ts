import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-vacation-type-list',
  templateUrl: './vacation-type-list.component.html',
  styleUrls: ['./vacation-type-list.component.scss']
})
export class VacationTypeListComponent {
  @Input() items: any;
}

