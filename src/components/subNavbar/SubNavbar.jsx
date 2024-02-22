import { NavLink } from "react-router-dom";
import subnavStyles from "./subNavbar.module.css";

const links = (
  <nav className={subnavStyles.subnav}>
    <a href="#" className={subnavStyles.subnav__link}>
      overview
    </a>
    <a
      href="#"
      className={`${subnavStyles.subnav__link} ${subnavStyles.active}`}
    >
      structure
    </a>
    <a href="#" className={subnavStyles.subnav__link}>
      surface
    </a>
  </nav>
);

const buttonLinks = (
  <>
    <a href="#" className={subnavStyles.buttonLinks}>
      <span className={subnavStyles.nav_num}>01</span> overview
    </a>
    <a
      href="#"
      className={`${subnavStyles.buttonLinks} ${subnavStyles.buttonLinksActive}`}
    >
      <span className={subnavStyles.nav_num}>02</span> Internal Structure
    </a>
    <a href="#" className={subnavStyles.buttonLinks}>
      <span className={subnavStyles.nav_num}>02</span> Surface Geology
    </a>
  </>
);

function SubNavbar() {
  return <nav>{buttonLinks}</nav>;
}

export default SubNavbar;
