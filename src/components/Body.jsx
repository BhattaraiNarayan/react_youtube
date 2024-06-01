import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {


  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Body;
