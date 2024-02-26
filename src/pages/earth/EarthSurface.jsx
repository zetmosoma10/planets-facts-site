import { useState } from "react";
import { useOutletContext } from "react-router";
import heroStyles from "../../components/hero/hero.module.css";

function EarthSurface() {
  const [earthData, setEarthData] = useState(useOutletContext());
  return (
    <>
      <div className={heroStyles.hero__image}>
        <img src={`/${earthData.images.planet}`} />
        <img src={`/${earthData.images.geology}`} />
      </div>
      <div className={heroStyles.hero__text}>
        <h1>{earthData.name}</h1>
        <p>{earthData.geology.content}</p>
      </div>
    </>
  );
}

export default EarthSurface;
