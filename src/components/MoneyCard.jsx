// Income and Expense Card: used in home screen
import {PiDownload, PiUpload} from "react-icons/pi";
import CustIconWrapper from "./CustIconWrapper";
import AmountWithRupee from "./AmountWithRupee";

const MoneyCard = ({title, amount}) => {
  return (
    <div
      className={
        title == "Income"
          ? "bg-green-500 text-white rounded-3xl flex gap-4 items-center px-5 py-3"
          : "bg-red-500 text-white rounded-3xl flex gap-4 items-center px-5 py-3"
      }
    >
      <CustIconWrapper
        className={
          title == "Income"
            ? "p-2 bg-white text-green-500 text-2xl"
            : "p-2 bg-white text-red-500 text-2xl"
        }
      >
        {title == "Income" ? <PiDownload /> : <PiUpload />}
      </CustIconWrapper>
      <div>
        <p className="text-xl">{title}</p>
        <AmountWithRupee amount={amount} className="text-2xl" />
      </div>
    </div>
  );
};

export default MoneyCard;
