import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../reducers';
import * as cardActions from '../../actions/card-actions'
import { CardModel } from '../../models';
import { EditCardDialogboxComponent } from './edit-card-dialogbox';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardData: CardModel;
  constructor(private _store: Store<State>, public editDialog: MdDialog) { }

  ngOnInit() {
  }

  deleteCardAction() {
    this._store.dispatch(new cardActions.RemoveAction({
      position: this.cardData.position,
      parentId: this.cardData.parentListId
    }));
  }

  updateCardAction() {
    let dialogRef = this.editDialog.open(EditCardDialogboxComponent);
    dialogRef.componentInstance.oldContent = this.cardData.content;
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        let newCardData = Object.assign({}, this.cardData)
        newCardData.content = data.content;
        this._store.dispatch(new cardActions.UpdateAction(newCardData));
      }
    });
  }

}
