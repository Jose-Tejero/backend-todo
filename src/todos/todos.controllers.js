const todoDB = [
  {
    id: 1,
    title: "Tarea semana 1",
    description: "Realizar la tarea de la semana 1",
    status: false,
  },
];

const getAllTodos = () => {
  return todoDB;
};

const getTodoById = () => {
  const filteredDB = todoDB.filter((todo) => todo.id === id);
  return filteredDB[0];
};

const createTodo = (todoObj) => {
  if (todoDB.length === 0) {
    const newTodo = {
      id: 1,
      title: todoObj.title,
      description: todoObj.description,
      status: todoObj.status,
    };
    todoDB.push(newTodo);
    return newTodo;
  }
  const newTodo = {
    id: todoDB[todoDB.length - 1].id + 1,
    title: todoObj.title,
    description: todoObj.description,
    status: todoObj.status,
  };
  todoDB.push(newTodo);
  return newTodo;
};

const editTodo = (id, data) => {
  const index = todoDB.findIndex((item) => item.id == id);
  if (index !== -1) {
    todoDB[index] = data;
    return todoDB[index];
  }
  return false;
};

const deleteTodo = (id) => {
  const index = todoDB.findIndex((item) => item.id == id);
  if (index !== -1) {
    todoDB.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  editTodo,
  deleteTodo,
};
