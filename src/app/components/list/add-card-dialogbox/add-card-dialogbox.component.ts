import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-add-card-dialogbox',
  templateUrl: './add-card-dialogbox.component.html',
  styleUrls: ['./add-card-dialogbox.component.css']
})
export class AddCardDialogboxComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<AddCardDialogboxComponent>) {
    //
  }

  ngOnInit() {
  }

}
