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
      let boardArr = [...state.board];
      boardArr.splice(action.payload.position, 1, action.payload);
      return {
        board: [...boardArr]
      };
    }
    case list.CHANGE_POSITION: {
     let boardArr = [...state.board];
     let removedItem = boardArr.splice(action.payload.oldPosition, 1)[0];
     boardArr.splice(action.payload.newPosition, 0, removedItem);
      return {
        board: [...boardArr]
      };
    }
    case card.ADD:{
      const payloadParentId: string = action.payload.parentListId;
      let parentList: ListModel = state.board.filter(list=>list.id == payloadParentId)[0];
      let parentListCopy: ListModel = Object.assign({},parentList);
      parentListCopy.content= parentListCopy.content.concat([action.payload]);
      let boardArr = [...state.board]
      boardArr.splice(parentListCopy.position, 1, parentListCopy);
      return{
        board : [...boardArr]
      };
    }
    case card.REMOVE: {
      const payloadParentId: string = action.payload.parentId;
      let parentList: ListModel = state.board.filter(list=>list.id == payloadParentId)[0];
      let parentListCopy: ListModel = Object.assign({},parentList);
      // make a copy of the content array and reassign to parentListCopy.content to avoid mutation
      parentListCopy.content= [...parentListCopy.content];
      parentListCopy.content.splice(action.payload.position,1);
      let boardArr = [...state.board];
      boardArr.splice(parentListCopy.position, 1, parentListCopy);
      return{
        board : [...boardArr]
      };
    }
    case card.UPDATE: {
      const payloadParentId: string = action.payload.parentListId;
      let parentList: ListModel = state.board.filter(list=>list.id == payloadParentId)[0];
      let parentListCopy: ListModel = Object.assign({},parentList);
      // make a copy of the content array and reassign to parentListCopy.content to avoid mutation
      parentListCopy.content= [...parentListCopy.content];
      // replace old card with the new edited payload
      parentListCopy.content.splice(action.payload.position,1,action.payload);
      let boardArr = [...state.board];
      boardArr.splice(parentListCopy.position, 1, parentListCopy);
      return{
        board : [...boardArr]
      };
    }
    case card.CHANGE_POSITION: {

      const payloadParentId: string = action.payload.parentId;
      let parentList: ListModel = state.board.filter(list=>list.id == payloadParentId)[0];
      let parentListCopy: ListModel = Object.assign({},parentList);
      // make a copy of the content array and reassign to parentListCopy.content to avoid mutation
      parentListCopy.content= [...parentListCopy.content];
      // replace old card with the new edited payload
      let removedItem = parentListCopy.content.splice(action.payload.oldPosition,1)[0];
      parentListCopy.content.splice(action.payload.newPosition,0,removedItem)[0];
      let boardArr = [...state.board];
      boardArr.splice(parentListCopy.position, 1, parentListCopy);
      return{
        board : [...boardArr]
      };
    }
    case card.CHANGE_BOARD: {

      const oldParentId: string = action.payload.oldParentId;
      let oldParent: ListModel = state.board.filter(list=>list.id == oldParentId)[0];
      let oldParentCopy: ListModel = Object.assign({},oldParent);
      // make a copy of the content array and reassign to parentListCopy.content to avoid mutation
      oldParentCopy.content= [...oldParentCopy.content];
      // replace old card with the new edited payload
      let removedItem =oldParentCopy.content.splice(action.payload.position,1)[0];
      const newParentId: string = action.payload.newParentId;
      let newParent: ListModel = state.board.filter(list=>list.id == newParentId)[0];
      let newParentCopy: ListModel = Object.assign({},oldParent);
      newParentCopy.content = [...newParentCopy.content]
      newParentCopy.content.push(removedItem);
      let boardArr = [...state.board];
      boardArr.splice(oldParentCopy.position, 1, oldParentCopy);
      boardArr.splice(newParentCopy.position, 1, newParentCopy);
      return{
        board : [...boardArr]
      };
    }

    default: {
      return state;
    }
  }
}

