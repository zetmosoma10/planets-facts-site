import { useContext, useState } from "react";
import { Outlet } from "react-router";
import { planetsContext } from "../layout/Layout";
import Feature from "../../components/feature/Feature";
import featureStyles from "../../components/feature/feature.module.css";
import layoutStyles from "../layout/layout.module.css";
import SaturnSubNav from "./SaturnSubNav";

function Saturn() {
  const [saturn, setSaturn] = useState(useContext(planetsContext));
  const saturnData = saturn?.find((planet) => planet.name === "Saturn");

  return (
    <>
      <div className={`${layoutStyles.grid} ${layoutStyles.grid_tablet}`}>
        <div className={layoutStyles.hero__nav}>
          <SaturnSubNav />
        </div>
        <Outlet context={saturnData} />
        <div className={layoutStyles.hero__feature}>
          <Feature>
            <p className={featureStyles.feature__text}>ROTATION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {saturnData.rotation}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>REVOLUTION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {saturnData.revolution}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>RADIUS</p>
            <h3 className={featureStyles.feature__value}>
              {saturnData.radius}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>AVERAGE TEMP.</p>
            <h3 className={featureStyles.feature__value}>
              {saturnData.temperature}
            </h3>
          </Feature>
        </div>
      </div>
    </>
  );
}

export default Saturn;
