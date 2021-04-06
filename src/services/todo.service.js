import axios from "@/lib/axios/axios";

const TODO_PATH = "/api/todos";

async function getTodos(id, limit) {
  const response = await axios.get(`${TODO_PATH}?page=${id}&limit=${limit}`);
  return response.items;
}

function createTodo(todo) {
  return axios.post(TODO_PATH, todo);
}

function deleteTodo(id) {
  return axios.delete(`${TODO_PATH}/${id}`);
}

function updateTodo(todo) {
  return axios.put(`${TODO_PATH}/${todo.id}`, {
    content: todo.content,
    status: todo.status,
  });
}

const TodoService = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};

export default TodoService;
