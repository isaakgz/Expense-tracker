function ExpenseForm() {
  return (
    <form className="container my-5" action="">
      <div className="mb-3">
        <label className="fw-bold form-label" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="description.."
        />
      </div>
      <div className="mb-3">
        <label className="fw-bold form-label" htmlFor="amount">
         Amount
        </label>
        <input
          type="number"
          className="form-control"
          placeholder="Amount.."
        />
      </div>
      <div className="mb-3">
      <label className="fw-bold form-label" htmlFor="catagory">
          Catogory
        </label>
        <select className="form-select" name="catagory" id="catagory">
          <option selected>choose..</option>
          <option value="Entertiament">Entertiament</option>
          <option value="Transportion">Transportion</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Utility">Utility</option>
        </select>
      </div>
    </form>
  );
}

export default ExpenseForm;
