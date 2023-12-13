import { catogories } from "../catogories";

interface props {
  onClick: (catgory:string) => void;
}
function ExpenseFilter({ onClick }: props) {
  return (
    <select onChange={(e) => onClick(e.target.value)} className="form-select container">
      <option selected>All catagories</option>
      {catogories.map((catgory) => (
        <option  value={catgory}>
          {catgory}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
