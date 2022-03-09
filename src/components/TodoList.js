import Todo from "./Todo";

const TodoList = ({ todos, onComplete, onDelete }) => {
  if (todos.length === 0) return <p>add some todos</p>;

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            // onEdit={onEdit}
            onComplete={() => onComplete(todo.id)}
            onDelete={() => onDelete(todo.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
