import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
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
    <form onSubmit={submitHandler}>
      <input type="text" value={input} onChange={changeHandler} />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
