const getters = {
  activeItems: state => {
    return state.allItems.filter(item => item.checked === false);
  },
  completeItems: state => {
    return state.allItems.filter(item => item.checked === true);
  }
}

export default getters;
