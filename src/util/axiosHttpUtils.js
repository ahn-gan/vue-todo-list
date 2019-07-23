import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

axios.defaults.timeout = 5000;

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

async function getTodoItems () {
  let response = await axios.get('/todos');
  return response.data || [];
}

async function addTodoItem (item) {
  let response = await axios.post('/todos', item);
  return response.data || [];
}

async function updateTodoItem (item) {
  let response = await axios.put(`/todos/${item.id}`, item);
  return response.data || [];
}

async function deleteItems (item) {
  let response = await axios.delete(`/todos/${item.id}`);
  return response.data || [];
}

export {
  addTodoItem,
  updateTodoItem,
  getTodoItems,
  deleteItems
};
