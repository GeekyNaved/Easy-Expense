import { useState } from "react";
import { dummyCategoryExpense, dummyCategoryIncome } from "../../DummyData/dummyTransaction";
import CategoriesCard from "../../components/CategoriesCard";

const Categories: React.JSX.Element = () => {
  const [type, setType] = useState<string>("Expense");
  const [categoriesData, setCategoriesData] = useState(dummyCategoryExpense);

  return (
    <div className="md:px-20 p-5 flex flex-col">
      <nav className="bg-transparent shadow-lg grid grid-cols-2">
        <button
          className={
            type == "Expense"
              ? "rounded bg-red-500 text-white p-5"
              : "rounded bg-red-100 text-black p-5"
          }
          onClick={() => {
            setType("Expense");
            setCategoriesData(dummyCategoryExpense);
          }}
        >
          Expense
        </button>
        <button
          className={
            type == "Income"
              ? "rounded bg-green-500 text-white p-5"
              : "rounded bg-green-100 text-black p-5"
          }
          onClick={() => {
            setType("Income");
            setCategoriesData(dummyCategoryIncome);
          }}
        >
          Income
        </button>
      </nav>
      <div className="mt-5">
        {categoriesData.map((item, key) => {
          return (
            <CategoriesCard
              key={key}
              name={item.label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
