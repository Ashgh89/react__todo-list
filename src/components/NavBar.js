const NavBar = ({ unCompletedTodos }) => {
  if (!unCompletedTodos) return <h2>set your today todos!</h2>;
  return (
    <header>
      <span>{unCompletedTodos}</span> <h2>not completed</h2>
      <select>
        <option value="All"></option>
        <option value="Completed"></option>
        <option value="Uncompleted"></option>
      </select>
    </header>
  );
};

export default NavBar;
// LET'S REFACTOR THIS

// NOW LETS'S GIVE IT SELECT OPTION
