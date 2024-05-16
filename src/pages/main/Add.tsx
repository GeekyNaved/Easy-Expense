import { useState } from "react";
import InputField from "../../components/InputField";
import CustButton from "../../components/CustButton";
import CustDropDown from "../../components/CustDropDown";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Add: React.JSX.Element = () => {
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
        <CustDropDown />
        <InputField type="text" placeholder="Notes" handleToggle={null} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            sx={{
              background: 'white',
            }}
          />
        </LocalizationProvider>
      </div>
      <CustButton title={`Add ${type}`} className="mt-10 px-10 self-center " />
    </div>
  );
};

export default Add;
