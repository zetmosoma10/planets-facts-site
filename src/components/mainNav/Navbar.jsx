import { useContext, useState } from "react";
import navStyles from "./mainNav.module.css";
import { NavLink } from "react-router-dom";
import { planetsContext } from "../../pages/layout/Layout";

// const planets = [
//   {
//     path: "#",
//     name: "mercury",
//   },
//   {
//     path: "#",
//     name: "venus",
//   },
//   {
//     path: "#",
//     name: "earth",
//   },
//   {
//     path: "#",
//     name: "mars",
//   },
//   {
//     path: "#",
//     name: "jupiter",
//   },
//   {
//     path: "#",
//     name: "saturn",
//   },
//   {
//     path: "#",
//     name: "uranus",
//   },
//   {
//     path: "#",
//     name: "neptune",
//   },
// ];
function Navbar() {
  const planetsData = useContext(planetsContext);
  console.log(planetsData);

  const [toggler, setToggler] = useState(true);

  const handleToggle = () => {
    setToggler((prevToggler) => !prevToggler);
  };

  return (
    <header className="container">
      <nav className={navStyles.main_nav}>
        <h2 className={navStyles.logo}>the planets</h2>
        <img
          onClick={handleToggle}
          className={`${navStyles.toggler} ${
            toggler ? null : navStyles.active
          }`}
          src="assets/icon-hamburger.svg"
        />
        <ul className={navStyles.nav_list_items}>
          {planetsData.map((planet) => (
            <li className={navStyles.nav_item} key={planet.name}>
              <NavLink to={`${planet.name}`}>{planet.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`${navStyles.mobile_links} ${
          toggler ? navStyles.show : null
        }`}
      >
        <ul className={`${navStyles.mobile_list_items} container`}>
          {planetsData.map((planet) => (
            <li className={navStyles.mobile_item} key={planet.name}>
              <div className={navStyles.name_wrapper}>
                <div className={navStyles.color}></div>
                <NavLink to={`${planet.name}`}>{planet.name}</NavLink>
              </div>
              <img src="assets/icon-chevron.svg" />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
