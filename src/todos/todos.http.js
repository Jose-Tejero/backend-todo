const {
  createTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
  getTodoById,
} = require("./todos.controllers");

const getAll = (req, res) => {
  const data = getAllTodos();
  res.status(200).json({
    items: data.length,
    response: data,
  });
};
