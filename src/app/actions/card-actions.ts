import { Action } from '@ngrx/store';
import { CardModel } from '../models';

export const ADD = '[Card] Add';
export const REMOVE = '[Card] Remove';
export const CHANGE_POSITION = '[Card] Change Position';
export const CHANGE_BOARD = '[Card] Change Board';
export const UPDATE = '[Card] Update'

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class AddAction implements Action {
  readonly type = ADD;
  constructor(public payload: CardModel) { }
}

export interface RemoveActionPayloadModel {
  position: number;
  parentId: string;
}

export class RemoveAction implements Action {
  readonly type = REMOVE;

  constructor(public payload: RemoveActionPayloadModel) { }
}

export interface ChangePositionPayloadModel {
  parentId: string;
  oldPosition: number;
  newPosition: number;
}

export interface ChangeBoardPayloadModel{
  oldParentId: string;
  position: number;
  newParentId: string;
}

export class ChangePositionAction implements Action {
  readonly type = CHANGE_POSITION;

  constructor(public payload: ChangePositionPayloadModel) { }
}

export class ChangeBoardAction implements Action {
  readonly type = CHANGE_BOARD;

  constructor(public payload: ChangeBoardPayloadModel) { }
}

export class UpdateAction implements Action {
  readonly type = UPDATE;

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
  | ChangeBoardAction;
