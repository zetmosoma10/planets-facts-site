import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetStructure from "../planetsDetailsLayout/PlanetStructure";

function EarthStructure() {
  const [earthData, setEarthData] = useState(useOutletContext());
  return (
    <>
      <PlanetStructure planetName={earthData} />
    </>
  );
}

export default EarthStructure;
