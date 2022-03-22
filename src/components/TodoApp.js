import { useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  // todos
  const addTodoHandler = (input) => {
    // console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeToDo = (id) => {
    // Watch Video No.81
    // You must learn it (AUSWÄNDIG)
    const index = todos.findIndex((todo) => todo.id === id);
    // console.log(index); // OUTPUT -> 0 or 1 or 2 and so on
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeToDo = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const updateToDo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <NavBar unCompletedTodos={todos.filter((t) => !t.isCompleted).length} />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onComplete={completeToDo}
        onDelete={removeToDo}
        onUpdate={updateToDo}
      />
    </div>
  );
};

export default TodoApp;
