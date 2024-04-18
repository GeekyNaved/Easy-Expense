import AmountWithRupee from "../../components/AmountWithRupee";
import {CustDonutChart} from "../../components/CustDonutChart";

const Transactions = () => {
  return (
    <div className="px-5 py-5 flex flex-col items-center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-3xl text-gray-500">My Spendings</p>
        <AmountWithRupee className="text-4xl" amount={19100} />
      </div>
      <div className="md:w-1/2 mt-10">
        <CustDonutChart />
      </div>
    </div>
  );
};

export default Transactions;
