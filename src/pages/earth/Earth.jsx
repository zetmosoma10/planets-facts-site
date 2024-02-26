import { useContext, useState } from "react";
import { Outlet, useOutletContext } from "react-router";
import { planetsContext } from "../layout/Layout";
import Feature from "../../components/feature/Feature";
import featureStyles from "../../components/feature/feature.module.css";
import SubNavbar from "../../components/subNavbar/SubNavbar";
import heroStyles from "../../components/hero/hero.module.css";

function Earth() {
  const [earth, setEarth] = useState(useContext(planetsContext));
  const earthData = earth?.find((planet) => planet.name === "Earth");

  return (
    <>
      <div className={`${heroStyles.grid} ${heroStyles.grid_tablet}`}>
        <div className={heroStyles.hero__nav}>
          <SubNavbar />
        </div>
        <Outlet context={earthData} />
        <div className={heroStyles.hero__feature}>
          <Feature>
            <p className={featureStyles.feature__text}>ROTATION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {earthData.rotation}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>REVOLUTION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {earthData.revolution}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>RADIUS</p>
            <h3 className={featureStyles.feature__value}>{earthData.radius}</h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>AVERAGE TEMP.</p>
            <h3 className={featureStyles.feature__value}>
              {earthData.temperature}
            </h3>
          </Feature>
        </div>
      </div>
    </>
  );
}

export default Earth;
