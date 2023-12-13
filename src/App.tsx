import { useState } from "react";
import "./App.css";
import ExpenseLists from "./components/ExpenseLists";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "beer", catgory: "Entertainment", amount: 5 },
    { id: 2, name: "taxi", catgory: "transportion", amount: 98 },
    { id: 3, name: "cinima", catgory: "Entertainment", amount: 5 },
  ]);

  return (
    <ExpenseLists
      expenses={expenses}
      onDelte={(id) => setExpenses(expenses.filter((e) => e.id != id))}
    />
  );
}

export default App;
