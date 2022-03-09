const Todo = ({ todo, onComplete }) => {
  return (
    <div className="todo">
      <div onClick={onComplete} className={todo.isCompleted ? "completed" : ""}>
        {todo.text}
      </div>
      <div>
        <button>Edit</button>
        <button>Complete</button>
      </div>
    </div>
  );
};

export default Todo;
