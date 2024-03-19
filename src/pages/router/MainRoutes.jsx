import {Navigate, Outlet} from "react-router-dom";
import BottomNavbar from "./BottomNavbar";

const MainRoutes = () => {
  const isLoggedIn = () => {
    let data = localStorage.getItem("token");
    if (data != null) return true;
    else return false;
  };
  if (isLoggedIn()) {
    return (
      <>
        <div className="max-h-2">
          <Outlet />
        </div>
        <BottomNavbar />
      </>
    );
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default MainRoutes;
