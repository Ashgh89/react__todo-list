import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Add entered todo to todos
    if (!input) {
      alert("enter todo!");
      //function will stop executing when return statement is called.
      return;
    }
    props.addTodoHandler(input);
    setInput("");
  };
  return (
    // Let'S refactoring and do it dynamic
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={props.edit ? "update value..." : "add new todos..."}
          ref={inputRef}
        />
        <button
          className={`btn ${props.edit ? "updateTodo" : "addTodo"}`}
          type="submit"
        >
          {props.edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
