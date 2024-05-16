import { NavLink } from "react-router-dom";
import { FaHome, FaPlus } from "react-icons/fa";
import { MdCategory, MdDonutSmall } from "react-icons/md";
import { FcSettings } from "react-icons/fc";

const BottomNavbar: React.JSX.Element = () => {
  return (
    <div className="bg-blue-300 fixed bottom-0 grid grid-cols-5 min-w-full">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 flex flex-col items-center px-4 py-5"
            : "flex flex-col items-center px-4 py-5"
        }
      >
        <FaHome className="text-2xl" />
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/transactions"
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 flex flex-col items-center px-4 py-5"
            : "flex flex-col items-center px-4 py-5"
        }
      >
        <MdDonutSmall className="text-2xl" />
        <p>Transactions</p>
      </NavLink>
      <NavLink
        to="/add"
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 flex flex-col items-center px-4 py-5"
            : "flex flex-col items-center px-4 py-5"
        }
      >
        <FaPlus className="text-2xl" />
        <p>Add</p>
      </NavLink>
      <NavLink
        to="/categories"
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 flex flex-col items-center px-4 py-5"
            : "flex flex-col items-center px-4 py-5"
        }
      >
        <MdCategory className="text-2xl" />
        <p>Categories</p>
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 flex flex-col items-center px-4 py-4"
            : "flex flex-col items-center px-4 py-4"
        }
      >
        <FcSettings className="text-2xl" />
        <p>Settings</p>
      </NavLink>
    </div>
  );
};

export default BottomNavbar;
