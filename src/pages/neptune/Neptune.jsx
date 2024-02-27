import { useContext, useState } from "react";
import { Outlet } from "react-router";
import { planetsContext } from "../layout/Layout";
import Feature from "../../components/feature/Feature";
import featureStyles from "../../components/feature/feature.module.css";
import layoutStyles from "../layout/layout.module.css";
import NeptuneSubNav from "./NeptuneSubNav";

function Neptune() {
  const [neptune, setNeptune] = useState(useContext(planetsContext));
  const neptuneData = neptune?.find((planet) => planet.name === "Neptune");

  return (
    <>
      <div className={`${layoutStyles.grid} ${layoutStyles.grid_tablet}`}>
        <div className={layoutStyles.hero__nav}>
          <NeptuneSubNav />
        </div>
        <Outlet context={neptuneData} />
        <div className={layoutStyles.hero__feature}>
          <Feature>
            <p className={featureStyles.feature__text}>ROTATION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {neptuneData.rotation}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>REVOLUTION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {neptuneData.revolution}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>RADIUS</p>
            <h3 className={featureStyles.feature__value}>
              {neptuneData.radius}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>AVERAGE TEMP.</p>
            <h3 className={featureStyles.feature__value}>
              {neptuneData.temperature}
            </h3>
          </Feature>
        </div>
      </div>
    </>
  );
}

export default Neptune;
