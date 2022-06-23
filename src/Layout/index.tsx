import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";

const Layout = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="App-header">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
