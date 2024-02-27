import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetSurface from "../planetsDetailsLayout/PlanetSurface";

function UranusSurface() {
  const [uranusData, setUranusData] = useState(useOutletContext());
  return (
    <>
      <PlanetSurface planetName={uranusData} />
    </>
  );
}

export default UranusSurface;
