import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetSurface from "../planetsDetailsLayout/PlanetSurface";

function NeptuneSurface() {
  const [neptuneData, setNeptuneData] = useState(useOutletContext());
  return (
    <>
      <PlanetSurface planetName={neptuneData} />
    </>
  );
}

export default NeptuneSurface;
