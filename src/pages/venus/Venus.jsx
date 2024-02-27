import { useContext, useState } from "react";
import { Outlet } from "react-router";
import { planetsContext } from "../layout/Layout";
import Feature from "../../components/feature/Feature";
import featureStyles from "../../components/feature/feature.module.css";
import layoutStyles from "../layout/layout.module.css";
import VenusSubNav from "./VenusSubNav";

function Venus() {
  const [venus, setVenus] = useState(useContext(planetsContext));
  const venusData = venus?.find((planet) => planet.name === "Venus");

  return (
    <>
      <div className={`${layoutStyles.grid} ${layoutStyles.grid_tablet}`}>
        <div className={layoutStyles.hero__nav}>
          <VenusSubNav />
        </div>
        <Outlet context={venusData} />
        <div className={layoutStyles.hero__feature}>
          <Feature>
            <p className={featureStyles.feature__text}>ROTATION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {venusData.rotation}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>REVOLUTION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {venusData.revolution}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>RADIUS</p>
            <h3 className={featureStyles.feature__value}>{venusData.radius}</h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>AVERAGE TEMP.</p>
            <h3 className={featureStyles.feature__value}>
              {venusData.temperature}
            </h3>
          </Feature>
        </div>
      </div>
    </>
  );
}

export default Venus;
