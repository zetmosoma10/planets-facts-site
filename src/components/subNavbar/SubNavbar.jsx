import { NavLink } from "react-router-dom";
import subnavStyles from "./subNavbar.module.css";

const links = (
  <nav className={subnavStyles.subnav}>
    <NavLink to="." className={subnavStyles.subnav__link}>
      overview
    </NavLink>
    <NavLink
      to="structure"
      className={`${subnavStyles.subnav__link} ${subnavStyles.active}`}
    >
      structure
    </NavLink>
    <NavLink to="surface" className={subnavStyles.subnav__link}>
      surface
    </NavLink>
  </nav>
);

const buttonLinks = (
  <div className={subnavStyles.buttonLink_container}>
    <NavLink to="." className={subnavStyles.buttonLinks}>
      <span className={subnavStyles.nav_num}>01</span> overview
    </NavLink>
    <NavLink
      to="structure"
      className={`${subnavStyles.buttonLinks} ${subnavStyles.buttonLinksActive}`}
    >
      <span className={subnavStyles.nav_num}>02</span> Internal Structure
    </NavLink>
    <NavLink to="surface" className={subnavStyles.buttonLinks}>
      <span className={subnavStyles.nav_num}>02</span> Surface Geology
    </NavLink>
  </div>
);

function SubNavbar() {
  return (
    <nav>
      {buttonLinks}
      {links}
    </nav>
  );
}

export default SubNavbar;
