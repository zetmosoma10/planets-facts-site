import { NavLink } from "react-router-dom";
import subnavStyles from "./subNavbar.module.css";

function ButtonSubNav({ color }) {
  const buttonLinksActive = {
    backgroundColor: color,
    border: "none",
  };
  return (
    <div className={subnavStyles.buttonLink_container}>
      <NavLink
        style={({ isActive }) => (isActive ? buttonLinksActive : null)}
        to="."
        end
        className={subnavStyles.buttonLinks}
      >
        <span className={subnavStyles.nav_num}>01</span> overview
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? buttonLinksActive : null)}
        to="structure"
        className={`${subnavStyles.buttonLinks} ${subnavStyles.buttonLinksActive}`}
      >
        <span className={subnavStyles.nav_num}>02</span> Internal Structure
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? buttonLinksActive : null)}
        to="surface"
        className={subnavStyles.buttonLinks}
      >
        <span className={subnavStyles.nav_num}>02</span> Surface Geology
      </NavLink>
    </div>
  );
}

export default ButtonSubNav;
