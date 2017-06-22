import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-card-dialogbox',
  templateUrl: './edit-card-dialogbox.component.html',
  styleUrls: ['./edit-card-dialogbox.component.css']
})
export class EditCardDialogboxComponent implements OnInit {
  public oldContent: string;
  constructor(public dialogRef: MdDialogRef<EditCardDialogboxComponent>) { }

  public ngOnInit() {
    //
  }

}
