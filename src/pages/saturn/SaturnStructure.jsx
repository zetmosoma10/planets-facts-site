import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetStructure from "../planetsDetailsLayout/PlanetStructure";

function SaturnStructure() {
  const [saturnData, setSaturnData] = useState(useOutletContext());
  return (
    <>
      <PlanetStructure planetName={saturnData} />
    </>
  );
}

export default SaturnStructure;
