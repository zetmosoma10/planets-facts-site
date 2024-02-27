import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetSurface from "../planetsDetailsLayout/PlanetSurface";

function MercurySurface() {
  const [mercuryData, setMercuryData] = useState(useOutletContext());
  return (
    <>
      <PlanetSurface planetName={mercuryData} />
    </>
  );
}

export default MercurySurface;
