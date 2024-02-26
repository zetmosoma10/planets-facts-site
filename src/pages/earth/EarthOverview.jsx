import { useState } from "react";
import { useOutletContext } from "react-router";
import heroStyles from "../../components/hero/hero.module.css";

function EarthOverview() {
  const [earthData, setEarthData] = useState(useOutletContext());
  return (
    <>
      <div className={heroStyles.hero__image}>
        <img src={`/${earthData.images.planet}`} />
      </div>
      <div className={heroStyles.hero__text}>
        <h1>{earthData.name}</h1>
        <p>{earthData.overview.content}</p>
      </div>
    </>
  );
}

export default EarthOverview;
