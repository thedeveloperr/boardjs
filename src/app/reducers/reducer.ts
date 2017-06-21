import { ListModel } from '../models';
import * as list from '../actions/list-actions';
import * as card from '../actions/card-actions';


export interface State {
  board: ListModel[];
};

export const initialState: State = {
  board: []
};

export function reducer(state = initialState, action: list.Actions | card.Actions): State {
  switch (action.type) {
    case list.ADD:
      return {
        board: [...state.board, action.payload]
      };
    case list.REMOVE: {
      let boardArr = [...state.board];
      boardArr.splice(action.payload, 1);
      return {
        board: [...boardArr]
      };
    }
    case list.UPDATE: {
      return state;
    }
    case list.CHANGE_POSITION: {
      return state;
    }
    case card.ADD:
      return state
    case card.REMOVE: {
      return state
    }
    case card.UPDATE: {
      return state;
    }
    case card.CHANGE_POSITION: {
      return state;
    }
    default: {
      return state;
    }
  }
}

