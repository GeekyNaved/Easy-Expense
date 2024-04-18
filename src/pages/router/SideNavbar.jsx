import {NavLink, useNavigate} from "react-router-dom";
import {FaHome, FaPlus} from "react-icons/fa";
import {MdCategory, MdDonutSmall} from "react-icons/md";
import {IoLogOut} from "react-icons/io5";
import {IoIosHelpCircle, IoMdSettings} from "react-icons/io";

const SideNavbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // console.log("token:Home", token);
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    // <div className="fixed top-0 flex flex-col h-full bg-orange-400 ">
    <div className="bg-blue-300 flex flex-col w-60">
      <div className="flex-1">
        <h1 className="p-5 text-2xl font-medium">Easy Expense</h1>
        <NavLink
          to="/home"
          className={({isActive}) =>
            isActive
              ? "bg-red-500 flex items-center gap-2 p-5"
              : " flex items-center gap-2 p-5"
          }
        >
          <FaHome className="text-2xl" />
          <p className="text-md">Home</p>
        </NavLink>
        <NavLink
          to="/transactions"
          className={({isActive}) =>
            isActive
              ? "bg-red-500 flex items-center gap-2 p-5"
              : " flex items-center gap-2 p-5"
          }
        >
          <MdDonutSmall className="text-2xl" />
          <p className="text-md">Transactions</p>
        </NavLink>
        <NavLink
          to="/add"
          className={({isActive}) =>
            isActive
              ? "bg-red-500 flex items-center gap-2 p-5"
              : " flex items-center gap-2 p-5"
          }
        >
          <FaPlus className="text-2xl" />
          <p className="text-md">Add</p>
        </NavLink>
        <NavLink
          to="/categories"
          className={({isActive}) =>
            isActive
              ? "bg-red-500 flex items-center gap-2 p-5"
              : " flex items-center gap-2 p-5"
          }
        >
          <MdCategory className="text-2xl" />
          <p className="text-md">Categories</p>
        </NavLink>
        <NavLink
          to="/settings"
          className={({isActive}) =>
            isActive
              ? "bg-red-500 flex items-center gap-2 p-5"
              : " flex items-center gap-2 p-5"
          }
        >
          <IoMdSettings className="text-2xl" />
          <p className="text-md">Settings</p>
        </NavLink>
      </div>
      <div>
        <button className="flex items-center gap-2 p-5" onClick={logout}>
          <IoLogOut className="text-2xl" />
          Logout
        </button>
        <div className="flex items-center gap-2 p-5">
          <IoIosHelpCircle className="text-2xl" />
          Help & Support
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
