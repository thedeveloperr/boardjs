import { Action } from '@ngrx/store';
import { ListModel } from '../models';

export const ADD = '[List] Add';
export const REMOVE = '[List] Remove';
export const CHANGE_POSITION = '[List] Change Position';
export const UPDATE = '[List] Update';

export class AddAction implements Action {
  public readonly type = ADD;
  constructor(public payload: ListModel) { }
}

// tslint:disable-next-line:max-classes-per-file
export class RemoveAction implements Action {
  public readonly type = REMOVE;

  constructor(public payload: string) { }
}

export interface ChangePositionPayloadModel {
  oldPosition: number;
  newPosition: number;
}

// tslint:disable-next-line:max-classes-per-file
export class ChangePositionAction implements Action {
  public readonly type = CHANGE_POSITION;

  constructor(public payload: ChangePositionPayloadModel) { }
}

// tslint:disable-next-line:max-classes-per-file
export class UpdateAction implements Action {
  public readonly type = UPDATE;

  constructor(public payload: ListModel) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = UpdateAction
  | AddAction
  | RemoveAction
  | ChangePositionAction;
