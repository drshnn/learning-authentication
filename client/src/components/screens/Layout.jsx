import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-7xl m-auto h-screen ">
      <Outlet />
      //Outlet
    </div>
  );
};
export default Layout;
