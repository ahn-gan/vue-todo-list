import {CHANGE_ALL_ITEMS, GET_ITEMS, INIT_ALL_ITEMS, UPDATE_ITEM} from "../util/constant";
import {addTodoItem, getTodoItems, updateTodoItem} from "../util/axiosHttpUtils";

const actions = {
  [INIT_ALL_ITEMS] (context, data) {
    context.commit(INIT_ALL_ITEMS, data)
  },
  [CHANGE_ALL_ITEMS] (context, data) {
    addTodoItem(data).then(val => {
      context.commit(CHANGE_ALL_ITEMS, data)
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
  }

  // [UPDATE_ITEM] ({ commit }, data) {
  //   updateTodoItem(data).then(
  //     commit(UPDATE_ITEM, data)
  //   )
  // }
}

export default actions;
