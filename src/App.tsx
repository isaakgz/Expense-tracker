import { useState } from "react";
import "./App.css";
import ExpenseLists from "./components/ExpenseLists";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "beer", catgory: "Entertainment", amount: 5 },
    { id: 2, description: "taxi", catgory: "transportion", amount: 98 },
    { id: 3, description: "cinima", catgory: "Entertainment", amount: 5 },
  ]);

  return (
    <>
    <ExpenseForm/>
    <ExpenseLists
      expenses={expenses}
      onDelte={(id) => setExpenses(expenses.filter((e) => e.id != id))}
    />
    </>
  );
}

export default App;
