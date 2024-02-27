import { NavLink } from "react-router-dom";
import subnavStyles from "./subNavbar.module.css";

function MobileSubNavbar({ color }) {
  const active = {
    borderBottom: `2px solid ${color}`,
    opacity: "1",
  };
  return (
    <nav className={subnavStyles.subnav}>
      <NavLink
        style={({ isActive }) => (isActive ? active : null)}
        to="."
        end
        className={subnavStyles.subnav__link}
      >
        overview
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : null)}
        to="structure"
        className={`${subnavStyles.subnav__link} ${subnavStyles.active}`}
      >
        structure
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : null)}
        to="surface"
        className={subnavStyles.subnav__link}
      >
        surface
      </NavLink>
    </nav>
  );
}

export default MobileSubNavbar;
