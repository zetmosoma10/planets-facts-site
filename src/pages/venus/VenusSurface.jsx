import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetSurface from "../planetsDetailsLayout/PlanetSurface";

function VenusSurface() {
  const [venusData, setVenusData] = useState(useOutletContext());
  return (
    <>
      <PlanetSurface planetName={venusData} />
    </>
  );
}

export default VenusSurface;
