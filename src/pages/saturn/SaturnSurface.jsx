import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetSurface from "../planetsDetailsLayout/PlanetSurface";

function SaturnSurface() {
  const [saturnData, setSaturnData] = useState(useOutletContext());
  return (
    <>
      <PlanetSurface planetName={saturnData} />
    </>
  );
}

export default SaturnSurface;
