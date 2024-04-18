import {NavLink} from "react-router-dom";
import {FaHome, FaPlus} from "react-icons/fa";
import {MdCategory, MdDonutSmall} from "react-icons/md";
import {FcSettings} from "react-icons/fc";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 grid grid-cols-5 min-w-full">
      <NavLink
        to="/home"
        className={({isActive}) =>
          isActive
            ? "bg-slate-500 flex flex-col items-center px-4 py-5"
            : "bg-slate-200 flex flex-col items-center px-4 py-5"
        }
      >
        <FaHome className="text3xl" />
        <p className="text3xl">Home</p>
      </NavLink>
      <NavLink
        to="/transactions"
        className={({isActive}) =>
          isActive
            ? "bg-slate-500 flex flex-col items-center px-4 py-5"
            : "bg-slate-200 flex flex-col items-center px-4 py-5"
        }
      >
        <MdDonutSmall />
        <p className="text3xl">Transactions</p>
      </NavLink>
      <NavLink
        to="/add"
        className={({isActive}) =>
          isActive
            ? "bg-slate-500 flex flex-col items-center px-4 py-5"
            : "bg-slate-200 flex flex-col items-center px-4 py-5"
        }
      >
        <FaPlus />
        <p className="text3xl">Add</p>
      </NavLink>
      <NavLink
        to="/categories"
        className={({isActive}) =>
          isActive
            ? "bg-slate-500 flex flex-col items-center px-4 py-5"
            : "bg-slate-200 flex flex-col items-center px-4 py-5"
        }
      >
        <MdCategory />
        <p className="text3xl">Categories</p>
      </NavLink>
      <NavLink
        to="/settings"
        className={({isActive}) =>
          isActive
            ? "bg-slate-500 flex flex-col items-center px-4 py-4"
            : "bg-slate-200 flex flex-col items-center px-4 py-4"
        }
      >
        <FcSettings />
        <p>Settings</p>
      </NavLink>
    </div>
  );
};

export default BottomNavbar;
