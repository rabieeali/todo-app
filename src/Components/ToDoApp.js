import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { useEffect, useState } from "react";
import Header from "./Header";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  const addTodDoHandler = (input) => {
    const newTodo = {
      id: Date.now(),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeHandler = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteHandler = (id) => {
    const filtered = todos.filter((item) => item.id !== id);
    setTodos(filtered);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        return setFilteredTodos(todos.filter((t) => t.isCompleted));
      case "Uncompleted":
        return setFilteredTodos(todos.filter((t) => !t.isCompleted));
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="container">
      <Header onSelect={changeHandler} selectedOption={status} />
      <ToDoForm addTodDoHandler={addTodDoHandler} />
      <ToDoList
        todos={filteredTodos}
        onComplete={completeHandler}
        onDelete={deleteHandler}
        onEdit={updateTodo}
      />
    </div>
  );
};

export default ToDoApp;
