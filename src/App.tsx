import { useState } from "react";
import "./App.css";
import ExpenseLists from "./components/ExpenseLists";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import PageDescripion from "./components/PageDescripion";

function App() {
  const [selectedCatgory, setSelctedCatgory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "cineama", catgory: "Utility", amount: 50 },
  ]);

  const visibleExpenses = selectedCatgory
    ? expenses.filter((e) => e.catgory === selectedCatgory)
    : expenses;
  return (
    <div className="container border border-secondary m-5 border-3 rounded ">
      <div className="row">
        <div className="col ">
          <PageDescripion/>
        </div>
        <div className="col-6">
          <ExpenseForm
            onSubmit={(data) =>
              setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
            }
          />
          <ExpenseFilter onClick={(catgory) => setSelctedCatgory(catgory)} />
          <ExpenseLists
            expenses={visibleExpenses}
            onDelte={(id) => setExpenses(expenses.filter((e) => e.id != id))}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
