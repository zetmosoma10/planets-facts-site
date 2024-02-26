import { useState } from "react";
import { useOutletContext } from "react-router";
import heroStyles from "../../components/hero/hero.module.css";

function EarthStructure() {
  const [earthData, setEarthData] = useState(useOutletContext());
  return (
    <>
      <div className={heroStyles.hero__image}>
        <img src={`/${earthData.images.internal}`} />
      </div>
      <div className={heroStyles.hero__text}>
        <h1>{earthData.name}</h1>
        <p>{earthData.structure.content} </p>
      </div>
    </>
  );
}

export default EarthStructure;
