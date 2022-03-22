import { useState } from "react";

const NavBar = ({ unCompletedTodos }) => {
  const [status, setStatus] = useState("All");
  const changeHandler = (e) => {
    setStatus(e.target.value);
  };
  if (!unCompletedTodos) return <h2>set your today todos!</h2>;
  return (
    <header>
      <span>{unCompletedTodos}</span> <h2>not completed</h2>
      <select onChange={changeHandler} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
// LET'S REFACTOR THIS

// NOW LETS'S GIVE IT SELECT OPTION
