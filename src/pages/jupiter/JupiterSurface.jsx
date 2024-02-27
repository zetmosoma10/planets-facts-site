import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetSurface from "../planetsDetailsLayout/PlanetSurface";

function JupiterSurface() {
  const [jupiterData, setJupiterData] = useState(useOutletContext());
  return (
    <>
      <PlanetSurface planetName={jupiterData} />
    </>
  );
}

export default JupiterSurface;
