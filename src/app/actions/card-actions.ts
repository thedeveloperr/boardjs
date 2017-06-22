import { Action } from '@ngrx/store';
import { CardModel } from '../models';

export const ADD = '[Card] Add';
export const REMOVE = '[Card] Remove';
export const CHANGE_POSITION = '[Card] Change Position';
export const CHANGE_LIST = '[Card] Change List';
export const UPDATE = '[Card] Update';

export class AddAction implements Action {
  public readonly type = ADD;
  constructor(public payload: CardModel) { }
}

export interface RemoveActionPayloadModel {
  position: number;
  parentId: string;
}

export class RemoveAction implements Action {
  public readonly type = REMOVE;

  constructor(public payload: RemoveActionPayloadModel) { }
}

export interface ChangePositionPayloadModel {
  parentId: string;
  oldPosition: number;
  newPosition: number;
}

export interface ChangeListPayloadModel {
  oldParentId: string;
  position: number;
  newParentId: string;
}

export class ChangePositionAction implements Action {
  public readonly type = CHANGE_POSITION;

  constructor(public payload: ChangePositionPayloadModel) { }
}

export class ChangeListAction implements Action {
  public readonly type = CHANGE_LIST;

  constructor(public payload: ChangeListPayloadModel) { }
}

export class UpdateAction implements Action {
  public readonly type = UPDATE;

  constructor(public payload: CardModel) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = UpdateAction
  | AddAction
  | RemoveAction
  | ChangePositionAction
  | ChangeListAction;
