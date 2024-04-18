import {FaRupeeSign} from "react-icons/fa";

const Home = () => {
  return (
    <div className="px-5 py-5 flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-3xl text-gray-500">Account Balance</p>
        <div className="flex gap-1 items-center text-2xl">
          <FaRupeeSign /> <p>68114</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
