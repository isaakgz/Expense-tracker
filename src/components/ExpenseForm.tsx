import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { catogories } from "../catogories";

//creating a schema for object
const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be atleast 3 charchters" })
    .max(50, { message: "description must be less than 50 charchters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01, { message: "amonut must be greater than 0.01" })
    .max(100_000, { message: "amount must not be greater than 100,000" }),
  catgory: z.enum(catogories, {
    errorMap: () => ({ message: "Catgory should be selected" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface props {
  onSubmit:(data:ExpenseFormData)=>void
}

function ExpenseForm({onSubmit}:props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit((data)=>onSubmit(data))} className="container mt-3 " action="">
      <div className="mb-2">
        <label className="fw-bold form-label" htmlFor="description">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          placeholder="description.."
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-2">
        <label className="fw-bold form-label" htmlFor="amount">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
          placeholder="Amount.."
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-2">
        <label className="fw-bold form-label" htmlFor="catgory">
          Catogory
        </label>
        <select
          {...register("catgory")}
          className="form-select"
          name="catgory"
          id="catgory"
        >
          <option selected>choose..</option>
          {catogories.map((catgory) => (
            <option value={catgory}>{catgory}</option>
          ))}
        </select>
        {errors.catgory && (
          <p className="text-danger">{errors.catgory.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ExpenseForm;
