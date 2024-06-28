import styles from "./form.module.css";
import ContextMenu from "../ContextMenu/ContextMenu";
import { useState, useEffect } from "react";

export default function Form() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("Category");
  const [filterData, setFilterData] = useState(data);
  const [expense, setExpense] = useState({
    id: "",
    name: "",
    amount: "",
    category: "",
  });

  function handleSort() {
    if (count % 3 == 0) {
      const sortArray = filterData.sort((a, b) => a.amount - b.amount);
      setFilterData(sortArray);
    } else if (count % 3 == 1) {
      const sortArray = filterData.sort((a, b) => b.amount - a.amount);
      setFilterData(sortArray);
    } else setFilterData(data);

    setCount((c) => c + 1);
  }

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  function handleFilter(e) {
    setFilter(e.target.value);
    if (e.target.value !== "")
      setFilterData(
        data.filter(
          (el) => el.category.toLowerCase() == e.target.value.toLowerCase()
        )
      );
    else setFilterData(data);
  }

  function handleClick(el) {
    el.preventDefault();
    if (!(expense.name && expense.amount && expense.category)) {
      alert("Invalid Data !!");
      setExpense({ id: "", name: "", amount: "", category: "" });
      return;
    }
    setData((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
    setExpense({ id: "", name: "", amount: "", category: "" });
  }
  return (
    <>
      <form className={`${styles.form}`} action="POST" id="form_dat">
        <label htmlFor="name">Name </label>
        <input
          name="name"
          type="text"
          id="nameOfTheExpense"
          value={expense.name}
          onChange={(e) =>
            setExpense((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <label htmlFor="category">Category </label>
        <select
          name="category"
          id="categoryOfTheExpense"
          value={expense.category}
          onChange={(e) =>
            setExpense((prev) => ({ ...prev, category: e.target.value }))
          }
        >
          <option value={""}>Select The Category </option>
          <option value={"One"}>One</option>
          <option value={"Two"}>Two</option>
          <option value={"Three"}>Three</option>
          <option value={"Four"}>Four</option>
          <option value={"Five"}>Five</option>
        </select>
        <label htmlFor="expense">Expense </label>
        <input
          name="expense"
          type="number"
          id="amountOfTheExpense"
          value={expense.amount}
          onChange={(e) =>
            setExpense((prev) => ({ ...prev, amount: e.target.value }))
          }
        />
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          ADD
        </button>
      </form>

      <div className={`${styles.dataTable}`}>
        <table>
          <thead>
            <tr>
              <th className={`${styles.bordered}`}>Name </th>
              <th className={`${styles.bordered}`}>
                <label htmlFor="filter">{filter ? filter : "Category"}</label>

                <select
                  className={`${styles.noBorder}`}
                  name="filter"
                  id="filterByCategory"
                  onChange={(e) => handleFilter(e)}
                >
                  <option value={""}></option>
                  <option value={"One"}>One</option>
                  <option value={"Two"}>Two</option>
                  <option value={"Three"}>Three</option>
                  <option value={"Four"}>Four</option>
                  <option value={"Five"}>Five</option>
                </select>
              </th>
              <th className={`${styles.bordered} `}>
                Expense
                <button className={`${styles.sortBy}`} onClick={handleSort}>
                  &uarr;&darr;
                </button>
              </th>
              <th className={`${styles.bordered}`}>O/P</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((el) => (
              <tr key={el.id}>
                <td className={`${styles.bordered}`}>{el.name}</td>
                <td className={`${styles.bordered}`}>{el.category}</td>
                <td className={`${styles.bordered}`}>{el.amount} Rs.</td>
                <td className={`${styles.bordered}`}>
                  <ContextMenu
                    id={el.id}
                    data={data}
                    setExp={setExpense}
                    setData={setData}
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td className={`${styles.bordered}`}>Total</td>
              <td className={`${styles.bordered}`}></td>
              <td className={`${styles.bordered}`}>
                {filterData.reduce((acc, curr) => {
                  return acc + Number(curr.amount);
                }, 0)}{" "}
                Rs.
              </td>
              <td className={`${styles.bordered}`}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
