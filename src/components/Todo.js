const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="todo">
      <div onClick={onComplete} className={todo.isCompleted ? "completed" : ""}>
        {todo.text}
      </div>
      <div>
        <button className="edit" onClick={onEdit}>
          Edit
        </button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
