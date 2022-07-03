import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const ToDoList = ({ todos, onComplete, onDelete, onEdit }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const editToDo = (newValue) => {
    onEdit(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodos = () => {
    return todos.length === 0 ? (
      <span className="d-block text-center mt-3 text-warning">
        Add Some To Dos!
      </span>
    ) : (
      todos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      ))
    );
  };
  return edit.id ? (
    <ToDoForm addTodDoHandler={editToDo} edit={edit} />
  ) : (
    renderTodos()
  );
};

export default ToDoList;
