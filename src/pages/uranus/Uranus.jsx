import { useContext, useState } from "react";
import { Outlet } from "react-router";
import { planetsContext } from "../layout/Layout";
import Feature from "../../components/feature/Feature";
import featureStyles from "../../components/feature/feature.module.css";
import layoutStyles from "../layout/layout.module.css";
import UranusSubNav from "./UranusSubNav";

function Uranus() {
  const [uranus, setUranus] = useState(useContext(planetsContext));
  const uranusData = uranus?.find((planet) => planet.name === "Uranus");

  return (
    <>
      <div className={`${layoutStyles.grid} ${layoutStyles.grid_tablet}`}>
        <div className={layoutStyles.hero__nav}>
          <UranusSubNav />
        </div>
        <Outlet context={uranusData} />
        <div className={layoutStyles.hero__feature}>
          <Feature>
            <p className={featureStyles.feature__text}>ROTATION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {uranusData.rotation}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>REVOLUTION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {uranusData.revolution}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>RADIUS</p>
            <h3 className={featureStyles.feature__value}>
              {uranusData.radius}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>AVERAGE TEMP.</p>
            <h3 className={featureStyles.feature__value}>
              {uranusData.temperature}
            </h3>
          </Feature>
        </div>
      </div>
    </>
  );
}

export default Uranus;
