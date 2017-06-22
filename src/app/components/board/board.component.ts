import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../reducers';
import * as listActions from '../../actions/list-actions';
import { DialogboxComponent } from './dialogbox';
import { ListRelatedService } from '../../services';
import { ListModel } from '../../models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() public appState: State = {
    board: []
  };

  constructor(private _store: Store<State>, public dialog: MdDialog,
              private _listService: ListRelatedService) {
    //
  }

  public ngOnInit() {
    //
  }

  public addListDialog() {
    let dialogRef = this.dialog.open(DialogboxComponent);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        let listId = this._listService.generateId();
        this._store.dispatch(new listActions.AddAction({
          id: listId,
          name: data.name,
          position: 0,
          content: []
        }));
      }
    });
  }
}
