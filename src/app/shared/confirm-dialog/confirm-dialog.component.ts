import { Component, OnInit, Inject } from '@angular/core';
import { SharedModule } from '../shared.module'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }
  onClick(result: boolean) {
    this.dialogRef.close(result);
  }

}
