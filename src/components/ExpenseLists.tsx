
//shaping eaxh expense

export interface Expense {
    id:number,
    description:string,
    amount:number,
    catgory:string
}

interface props {
    expenses:Expense[]
    onDelte:(id:number)=>void
}


function ExpenseLists({expenses, onDelte}:props) {
 
  return (

    
        <table className="container table table-striped my-5 table-responsive">
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Catagory</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.description}</td>
                <td>{item.catgory}</td>
                <td>$ {" "}{item.amount}</td>
                <td>
                  <button className="btn btn btn-outline-danger" onClick={()=>onDelte(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <td></td>
              <td></td>
              <td>$ {" "}{expenses.reduce((acc, expense)=>acc + expense.amount, 0).toFixed(2)}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>

  );
}

export default ExpenseLists;
