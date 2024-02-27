import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetSurface from "../planetsDetailsLayout/PlanetSurface";

function EarthSurface() {
  const [earthData, setEarthData] = useState(useOutletContext());
  return (
    <>
      <PlanetSurface planetName={earthData} />
    </>
  );
}

export default EarthSurface;
