import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../reducers';
import * as listActions from '../../actions/list-actions';
import * as cardActions from '../../actions/card-actions';
import { ListRelatedService } from '../../services';
import { ListModel } from '../../models';
import { EditDialogboxComponent } from './edit-dialogbox';
import { AddCardDialogboxComponent } from './add-card-dialogbox';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() public listData: ListModel;
  constructor(private _store: Store<State>, public editDialog: MdDialog,
              public addDialog: MdDialog) { }

  public ngOnInit() {
    //
  }

  public deleteListAction() {
    this._store.dispatch(new listActions.RemoveAction(this.listData.id));
  }

  public updateListAction() {
    let dialogRef = this.editDialog.open(EditDialogboxComponent);
    dialogRef.componentInstance.oldName = this.listData.name;
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        let newListData = Object.assign({}, this.listData);
        newListData.name = data.newName;
        this._store.dispatch(new listActions.UpdateAction(newListData));
      }
    });
  }
  public addCardAction() {
    let dialogRef = this.addDialog.open(AddCardDialogboxComponent);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        let parentId = this.listData.id;
        let newPosition = this.listData.content.length;
        this._store.dispatch(new cardActions.AddAction({
          parentListId: parentId,
          content: data.content,
          position: newPosition
        }));
      }
    });
  }

}
