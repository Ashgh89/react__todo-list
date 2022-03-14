import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const submitTodoHandler = (newValue) => {
    onUpdate(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodos = () => {
    if (todos.length === 0) return <p>add someeeeeee todos</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          // onEdit={onEdit}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm addTodoHandler={submitTodoHandler} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
