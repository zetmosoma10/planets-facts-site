import { Outlet } from "react-router";
import Navbar from "../../components/mainNav/Navbar";
import planetsData from "../../data.json";
import { createContext } from "react";

const planetsContext = createContext();

function Layout() {
  return (
    <planetsContext.Provider value={planetsData}>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </planetsContext.Provider>
  );
}

export { planetsContext };
export default Layout;
