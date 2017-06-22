import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../reducers';
import * as listActions from '../../actions/list-actions'
import { ListRelatedService } from '../../services';
import { ListModel } from '../../models';
import { EditDialogboxComponent } from './edit-dialogbox';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listData: ListModel;
  constructor(private _store:Store<State>,public editDialog: MdDialog) { }

  ngOnInit() {
  }

  deleteListAction(){
    this._store.dispatch(new listActions.RemoveAction(this.listData.id))
  }

  updateListAction(){
    let dialogRef = this.editDialog.open(EditDialogboxComponent);
    dialogRef.componentInstance.oldName = this.listData.name;
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        let newListData = Object.assign({},this.listData)
        newListData.name = data.newName;
        this._store.dispatch(new listActions.UpdateAction(newListData));
      }
    });
  }

}
