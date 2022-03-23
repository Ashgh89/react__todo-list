//NOTICE 1. paste npm i react-select in terminal and press enter
// 2. import Select
// 3. Copy const options = [] and paste it here
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const NavBar = ({ unCompletedTodos, onChange, selectedOption }) => {
  // const [status, setStatus] = useState("All");
  // const changeHandler = (e) => {
  //   setStatus(e.target.value);
  //   filterTodos(e.target.value);
  // };
  if (!unCompletedTodos) return <h2>set your today todos!</h2>;
  return (
    <header>
      <span>{unCompletedTodos}</span> <h2>not completed</h2>
      <Select
        onChange={onChange}
        value={selectedOption}
        options={options}
        className="select"
      />
      {/* <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select> */}
    </header>
  );
};

export default NavBar;
