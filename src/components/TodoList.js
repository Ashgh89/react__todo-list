import Todo from "./Todo";

const TodoList = ({ todos }) => {
  if (todos.length === 0) return <p>add some todos</p>;

  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
