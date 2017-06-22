import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-dialogbox',
  templateUrl: './edit-dialogbox.component.html',
  styleUrls: ['./edit-dialogbox.component.css']
})
export class EditDialogboxComponent implements OnInit {
  public oldName: string;
  constructor(public dialogRef: MdDialogRef<EditDialogboxComponent>) { }

  public ngOnInit() {
    //
  }

}
