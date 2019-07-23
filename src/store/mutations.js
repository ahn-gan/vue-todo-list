import {CHANGE_ACTIVE_BUTTON, CHANGE_ALL_ITEMS, DELETE_ITEM, INIT_ALL_ITEMS, UPDATE_ITEM} from "../util/constant";

const mutations =  {
  [CHANGE_ALL_ITEMS] (state, data) {
    state.allItems.push(data);
  },
  [CHANGE_ACTIVE_BUTTON] (state, data) {
    state.activeButton = data;
  },
  [INIT_ALL_ITEMS] (state, data) {
    state.allItems = data;
  },
  [UPDATE_ITEM] (state, data) {
    let item = state.allItems.filter(val => val.id === data.id);
    let index = state.allItems.indexOf(item);
    state.allItems[index] = data;
  },
  [DELETE_ITEM] (state, data) {
    state.allItems = state.allItems.filter(val => val.id !== data.id);
  }
};

export default mutations;
