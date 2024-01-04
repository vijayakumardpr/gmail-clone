import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="row">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
