import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';

@Component({
  selector: 'app-success',
  templateUrl: './success-card.component.html',
  styleUrls: ['./success-card.component.scss']
})
export class SuccessCardComponent implements OnInit {
  constructor(private  dialogRef:  MatDialogRef<SuccessCardComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { }

  ngOnInit(): void {
  }
  public  closeMe() {
    this.dialogRef.close();
}
}