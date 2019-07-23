import {CHANGE_ALL_ITEMS, DELETE_ITEM, GET_ITEMS, INIT_ALL_ITEMS, UPDATE_ITEM} from "../util/constant";
import {addTodoItem, getTodoItems, updateTodoItem, deleteItems} from "../util/axiosHttpUtils";

const actions = {
  [INIT_ALL_ITEMS] (context, data) {
    context.commit(INIT_ALL_ITEMS, data)
  },
  [CHANGE_ALL_ITEMS] (context, data) {
    addTodoItem(data).then(val => {
      context.commit(CHANGE_ALL_ITEMS, val)
    });
  },
  [UPDATE_ITEM] (context, data) {
    updateTodoItem(data).then(
      context.commit(UPDATE_ITEM, data)
    )
  },
  [GET_ITEMS] (context) {
    getTodoItems().then( data => {
      context.commit(INIT_ALL_ITEMS, data)
    })
  },
  [DELETE_ITEM] (context, data) {
    deleteItems(data).then( response => {
      context.commit(DELETE_ITEM, data)
    })
  }

  // [UPDATE_ITEM] ({ commit }, data) {
  //   updateTodoItem(data).then(
  //     commit(UPDATE_ITEM, data)
  //   )
  // }
}

export default actions;
