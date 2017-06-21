import { Action } from '@ngrx/store';
import { ListModel } from '../models';

export const ADD = '[List] Add';
export const REMOVE = '[List] Remove';
export const CHANGE_POSITION = '[List] Change Position';
export const UPDATE = '[List] Update'

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class AddAction implements Action {
  readonly type = ADD;
  constructor(public payload: ListModel) { }
}

export class RemoveAction implements Action {
  readonly type = REMOVE;

  constructor(public payload: string) { }
}

export interface ChangePositionPayloadModel{
  oldPosition: number;
  newPosition: number;
}

export class ChangePositionAction implements Action {
  readonly type = CHANGE_POSITION;

  constructor(public payload: ChangePositionPayloadModel) { }
}

export class UpdateAction implements Action {
  readonly type = UPDATE;

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
