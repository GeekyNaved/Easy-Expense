import {dummyTransaction} from "../../DummyData/dummyTransaction";
import AccountBalanceHome from "../../components/AccountBalanceHome";
import TransactionCard from "../../components/TransactionCard";

const Home = () => {
  return (
    <div className="md:px-20 p-5 flex flex-col">
      <AccountBalanceHome />
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

export default Home;
