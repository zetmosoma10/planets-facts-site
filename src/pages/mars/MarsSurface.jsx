import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetSurface from "../planetsDetailsLayout/PlanetSurface";

function MarsSurface() {
  const [marsData, setMarsData] = useState(useOutletContext());
  return (
    <>
      <PlanetSurface planetName={marsData} />
    </>
  );
}

export default MarsSurface;
