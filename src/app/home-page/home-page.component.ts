import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public state$: Observable<State>;
  constructor(private _store: Store<State>) {
    this.state$ = this._store.select('appState');
  }

  public ngOnInit() {
    //
  }

}
