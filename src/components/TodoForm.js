import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
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
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder="update todo..."
        ref={inputRef}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
