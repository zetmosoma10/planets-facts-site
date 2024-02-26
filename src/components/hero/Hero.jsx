import { Outlet } from "react-router";
// import Feature from "../feature/Feature";
import SubNavbar from "../subNavbar/SubNavbar";
import heroStyles from "./hero.module.css";

function Hero() {
  return (
    <div className={`${heroStyles.grid} ${heroStyles.grid_tablet}`}>
      <div className={heroStyles.hero__nav}>
        <SubNavbar />
      </div>
      <div className={heroStyles.hero__image}>
        <Outlet />
      </div>
      <div className={heroStyles.hero__text}>
        <Outlet />
      </div>
      <div className={heroStyles.hero__feature}>
        <Outlet />
      </div>
    </div>
  );
}

export default Hero;
