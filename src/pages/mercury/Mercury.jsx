import { useContext, useState } from "react";
import { Outlet } from "react-router";
import { planetsContext } from "../layout/Layout";
import Feature from "../../components/feature/Feature";
import featureStyles from "../../components/feature/feature.module.css";
import layoutStyles from "../layout/layout.module.css";
import MercurySubNav from "./MercurySubNav";

function Mercury() {
  const [mercury, setMercury] = useState(useContext(planetsContext));
  const mercuryData = mercury?.find((planet) => planet.name === "Mercury");

  return (
    <>
      <div className={`${layoutStyles.grid} ${layoutStyles.grid_tablet}`}>
        <div className={layoutStyles.hero__nav}>
          <MercurySubNav />
        </div>
        <Outlet context={mercuryData} />
        <div className={layoutStyles.hero__feature}>
          <Feature>
            <p className={featureStyles.feature__text}>ROTATION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {mercuryData.rotation}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>REVOLUTION TIME</p>
            <h3 className={featureStyles.feature__value}>
              {mercuryData.revolution}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>RADIUS</p>
            <h3 className={featureStyles.feature__value}>
              {mercuryData.radius}
            </h3>
          </Feature>
          <Feature>
            <p className={featureStyles.feature__text}>AVERAGE TEMP.</p>
            <h3 className={featureStyles.feature__value}>
              {mercuryData.temperature}
            </h3>
          </Feature>
        </div>
      </div>
    </>
  );
}

export default Mercury;
