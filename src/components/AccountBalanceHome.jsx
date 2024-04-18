// Account Balance full details with income, expense and remaining amount: used in home
import AmountWithRupee from "./AmountWithRupee";
import MoneyCard from "./MoneyCard";

const AccountBalanceHome = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-3xl text-gray-500">Account Balance</p>
      <AmountWithRupee className="text-4xl" amount={22000} />
      <div className="flex gap-4 py-5">
        <MoneyCard title="Income" amount="40000" />
        <MoneyCard title="Expenses" amount="18000" />
      </div>
    </div>
  );
};

export default AccountBalanceHome;
