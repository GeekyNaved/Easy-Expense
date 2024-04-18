import AmountWithRupee from "./AmountWithRupee";
import CustIconWrapper from "./CustIconWrapper";
import {PiDownload, PiUpload} from "react-icons/pi";

const TransactionCard = ({type, category, notes, amount, date}) => {
  return (
    <div className="flex justify-between items-center rounded-xl bg-slate-50 shadow-lg px-5 py-5 mb-5">
      <div className="flex gap-5 items-center">
        <CustIconWrapper
          className={
            type == "income"
              ? "p-2 bg-green-100 text-green-500 text-2xl"
              : "p-2 bg-red-100 text-red-500 text-2xl"
          }
        >
          {type == "income" ? <PiDownload /> : <PiUpload />}
        </CustIconWrapper>
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-medium">{category}</p>
          <p className="text-gray-500">{notes}</p>
        </div>
      </div>
      <div className="text-center">
        <AmountWithRupee
          amount={amount}
          className={type == "income" ? "text-green-500 text-2xl" : "text-red-500 text-2xl"}
        />
        <p className="font-medium">Date: {date}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
