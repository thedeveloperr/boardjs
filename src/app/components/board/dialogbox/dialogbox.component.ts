import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<DialogboxComponent>) {
    //
  }

  ngOnInit() {
  }

}
