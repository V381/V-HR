import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-intro-description',
  templateUrl: './intro-description.component.html',
  styleUrls: ['./intro-description.component.scss']
})
export class IntroDescriptionComponent {
  constructor(private dialogRef: MatDialogRef<IntroDescriptionComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}


