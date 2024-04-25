import {useState} from "react";
import InputField from "../../components/InputField";
import CustButton from "../../components/CustButton";

const Add = () => {
  const [type, setType] = useState("Expense");

  return (
    <div className="md:px-20 p-5 flex flex-col">
      <nav className="bg-transparent shadow-lg grid grid-cols-2">
        <button
          className={
            type == "Expense"
              ? "rounded bg-red-500 text-white p-5"
              : "rounded bg-red-100 text-black p-5"
          }
          onClick={() => setType("Expense")}
        >
          Expense
        </button>
        <button
          className={
            type == "Income"
              ? "rounded bg-green-500 text-white p-5"
              : "rounded bg-green-100 text-black p-5"
          }
          onClick={() => setType("Income")}
        >
          Income
        </button>
      </nav>
      <div className="grid md:grid-cols-2 gap-4 mt-5">
        <InputField type="text" placeholder="Amount" handleToggle={null} />
        <InputField type="text" placeholder="Category" handleToggle={null} />
        <InputField type="text" placeholder="Notes" handleToggle={null} />
        <InputField type="text" placeholder="Date" handleToggle={null} />
      </div>
      <CustButton title={`Add ${type}`} className="mt-10 px-10 self-center " />
    </div>
  );
};

export default Add;
