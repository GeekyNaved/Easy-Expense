import { MdEdit } from "react-icons/md";
import AmountWithRupee from "./AmountWithRupee";
import CustIconWrapper from "./CustIconWrapper";
import { PiDownload, PiUpload } from "react-icons/pi";
import { useState } from "react";
import EditTransactionDialog from "./EditTransactionDialog";
interface TransactionCardProps {
  type: string;
  category: string;
  notes: string;
  amount: number;
  date: string;
}
const TransactionCard: React.FC<TransactionCardProps> = ({ type, category, notes, amount, date }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    // console.log('name', name)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex justify-between items-center rounded-xl bg-slate-50 shadow-lg px-2 py-4 md:p-5 mb-5">
      <div className="flex gap-2 md:gap-5 items-center">
        <CustIconWrapper
          className={
            type == "income"
              ? "p-2 bg-green-100 text-green-500 md:text-xl"
              : "p-2 bg-red-100 text-red-500 md:text-xl"
          }
        >
          {type == "income" ? <PiDownload /> : <PiUpload />}
        </CustIconWrapper>
        <div className="flex flex-col md:gap-1">
          <p className="md:text-xl font-medium">{category}</p>
          <p className="text-xs md:text-sm text-gray-500">{notes}</p>
        </div>
      </div>
      <div className="flex gap-2 md:gap-5 items-center">
        <div className="text-center">
          <AmountWithRupee
            amount={amount}
            className={type == "income" ? "text-green-500 md:text-xl" : "text-red-500 md:text-xl"}
          />
          <p className="font-medium text-xs md:text-sm">Date: {date}</p>
        </div>
        <EditTransactionDialog isOpen={open} onClose={handleClose}>
          <button onClick={handleClickOpen}>
            <CustIconWrapper className="p-1 md:p-2 bg-slate-100 md:text-xl">
              <MdEdit />
            </CustIconWrapper>
          </button>
        </EditTransactionDialog>
      </div>
    </div>
  );
};

export default TransactionCard;
