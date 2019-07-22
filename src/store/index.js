import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const CHANGE_ALL_ITEMS = 'change_all_items';

export const CHANGE_ACTIVE_BUTTON = 'change_active_button';

export const BUTTON_ALL = 'ALL';

export const BUTTON_ACTIVE = 'Active';

export const BUTTON_COMPLETE = 'Complete';

const store = new Vuex.Store({
  state: {
    allItems: [],
    activeButton: BUTTON_ALL
  },
  mutations: {
    [CHANGE_ALL_ITEMS] (state, data) {
      state.allItems.push(data);
    },
    [CHANGE_ACTIVE_BUTTON] (state, data) {
      state.activeButton = data;
    }
  },
  getters: {
    activeItems: state => {
      return state.allItems.filter(item => item.checked === false);
    },
    completeItems: state => {
      return state.allItems.filter(item => item.checked === true);
    }
  }
});

export default store;
