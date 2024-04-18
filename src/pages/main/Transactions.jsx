import {dummyTransaction} from "../../DummyData/dummyTransaction";
import AmountWithRupee from "../../components/AmountWithRupee";
import {CustDonutChart} from "../../components/CustDonutChart";
import TransactionCard from "../../components/TransactionCard";

const Transactions = () => {
  return (
    <div className="md:px-20 p-5 flex flex-col">
      <div className="flex flex-col items-center gap-2">
        <p className="text-3xl text-gray-500">My Spendings</p>
        <AmountWithRupee className="text-4xl" amount={19100} />
      </div>
      <div className="md:w-1/3 mt-10 self-center">
        <CustDonutChart />
      </div>
      <h2 className="text-2xl text-gray-500 mt-5 mb-2 font-semibold">
        Recent Transactions
      </h2>
      {dummyTransaction.map((item, key) => {
        return (
          <TransactionCard
            key={key}
            type={item.type}
            category={item.category}
            notes={item.notes}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
};

export default Transactions;
