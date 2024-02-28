import { useContext, useMemo, useState } from "react";
import { Outlet } from "react-router";
import { planetsContext } from "../layout/Layout";
import Feature from "../../components/feature/Feature";
import featureStyles from "../../components/feature/feature.module.css";
import layoutStyles from "../layout/layout.module.css";
import MarsSubNav from "./MarsSubNav";

function Mars() {
  const dataContext = useContext(planetsContext);
  const marsData = dataContext?.find((planet) => planet.name === "Mars");
  const [mars, setMars] = useState(marsData);

  return (
    <>
      {marsData ? (
        <div className={`${layoutStyles.grid} ${layoutStyles.grid_tablet}`}>
          <div className={layoutStyles.hero__nav}>
            <MarsSubNav />
          </div>
          <Outlet context={mars} />
          <div className={layoutStyles.hero__feature}>
            <Feature>
              <p className={featureStyles.feature__text}>ROTATION TIME</p>
              <h3 className={featureStyles.feature__value}>{mars.rotation}</h3>
            </Feature>
            <Feature>
              <p className={featureStyles.feature__text}>REVOLUTION TIME</p>
              <h3 className={featureStyles.feature__value}>
                {mars.revolution}
              </h3>
            </Feature>
            <Feature>
              <p className={featureStyles.feature__text}>RADIUS</p>
              <h3 className={featureStyles.feature__value}>{mars.radius}</h3>
            </Feature>
            <Feature>
              <p className={featureStyles.feature__text}>AVERAGE TEMP.</p>
              <h3 className={featureStyles.feature__value}>
                {mars.temperature}
              </h3>
            </Feature>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default Mars;
