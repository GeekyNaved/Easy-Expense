import {Navigate, Outlet} from "react-router-dom";
import BottomNavbar from "./BottomNavbar";
import {useEffect, useState} from "react";
import SideNavbar from "./SideNavbar";

const MainRoutes = () => {
  const [isMobile, setIsMobile] = useState(Boolean);
  // check user's device is mobile or desktop to bottomNavbar on mobile & sideNavbar in desktops
  useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    setIsMobile(
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent.toLowerCase()
      )
    );
  }, []);

  const isLoggedIn = () => {
    let data = localStorage.getItem("token");
    if (data != null) return true;
    else return false;
  };
  if (isLoggedIn()) {
    return (
      <div className="flex flex-row w-screen h-screen overflow-x-hidden">
        {isMobile ? <BottomNavbar /> : <SideNavbar />}
        <div className="w-screen h-screen bg-blue-50 overflow-hidden">
          <Outlet />
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default MainRoutes;
