import {
  ListModel
} from '../models';
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
    case list.REMOVE:
      {
        return {
          board: state.board.filter((list) => list.id !== action.payload)
        };
      }
    case list.UPDATE:
      {
        return {
          board: state.board.map((list) => {
            if (list.id === action.payload.id) {
              return action.payload;
            }
            return list;
          })
        };
      }
    case list.CHANGE_POSITION:
      {
        let boardArr = [...state.board];
        let removedItem = boardArr.splice(action.payload.oldPosition, 1)[0];
        boardArr.splice(action.payload.newPosition, 0, removedItem);
        return {
          board: [...boardArr]
        };
      }
    case card.ADD:
      {
        return {
          board: state.board.map((list) => {
            if (list.id === action.payload.parentListId) {
              let listObjCopy = Object.assign({}, list);
              listObjCopy.content = listObjCopy.content.concat([action.payload]);
              return listObjCopy;
            }
            return list;

          })
        };

      }
    case card.REMOVE:
      {
        return {
          board: state.board.map((list) => {
            if (list.id === action.payload.parentId) {
              let listObjCopy = Object.assign({}, list);
              listObjCopy.content = listObjCopy.content.filter((card) =>
               card.position !== action.payload.position);
              return listObjCopy;
            }
            return list;

          })
        };
      }
    case card.UPDATE:
      {
        return {
          board: state.board.map((list) => {
            if (list.id === action.payload.parentListId) {
              let listObjCopy = Object.assign({}, list);
              listObjCopy.content = listObjCopy.content.map((card) => {
                if (card.position === action.payload.position) {
                  return action.payload;
                }
                return card;
              });
              return listObjCopy;
            }
            return list;
          })
        };
      }
    case card.CHANGE_POSITION:
      {
        return {
          board: state.board.map((list) => {
            if (list.id === action.payload.parentId) {
              let listObjCopy = Object.assign({}, list);
              listObjCopy.content = [...listObjCopy.content];
              let removedItem = listObjCopy.content.splice(action.payload.oldPosition, 1)[0];
              listObjCopy.content.splice(action.payload.newPosition, 0, removedItem);
              return listObjCopy;
            }
            return list;
          })
        };
      }
    case card.CHANGE_LIST:
      {

        const oldParentId: string = action.payload.oldParentId;
        let oldParent: ListModel = state.board.filter((list) => list.id === oldParentId)[0];
        let oldParentCopy: ListModel = Object.assign({}, oldParent);
        // make a copy of the content array and reassign to parentListCopy.content to avoid mutation
        oldParentCopy.content = [...oldParentCopy.content];
        // replace old card with the new edited payload
        let removedItem = oldParentCopy.content.splice(action.payload.position, 1)[0];
        const newParentId: string = action.payload.newParentId;
        let newParent: ListModel = state.board.filter((list) => list.id === newParentId)[0];
        let newParentCopy: ListModel = Object.assign({}, oldParent);
        newParentCopy.content = [...newParentCopy.content];
        newParentCopy.content.push(removedItem);
        let boardArr = [...state.board];
        boardArr.splice(oldParentCopy.position, 1, oldParentCopy);
        boardArr.splice(newParentCopy.position, 1, newParentCopy);
        return {
          board: [...boardArr]
        };
      }

    default:
      {
        return state;
      }
  }
}
