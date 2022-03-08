import Todo from "./Todo";

const TodoList = ({ todos }) => {
  if (todos.length === 0) return <p>add some todos</p>;

  return (
    <div>
      {todos.map((todoo) => {
        return <Todo key={todoo.id} todo={todoo} />;
      })}
    </div>
  );
};

export default TodoList;
