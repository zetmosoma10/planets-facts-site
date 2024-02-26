import { Outlet } from "react-router";
import Navbar from "../../components/mainNav/Navbar";
import planetsData from "../../data.json";
import { createContext, useState } from "react";

const planetsContext = createContext();

function Layout() {
  const [allPlanets, setAllPlanets] = useState(planetsData);
  return (
    <planetsContext.Provider value={allPlanets}>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </planetsContext.Provider>
  );
}

export { planetsContext };
export default Layout;
