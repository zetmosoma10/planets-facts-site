import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetStructure from "../planetsDetailsLayout/PlanetStructure";

function MercuryStructure() {
  const [mercuryData, setMercuryData] = useState(useOutletContext());
  return (
    <>
      <PlanetStructure planetName={mercuryData} />
    </>
  );
}

export default MercuryStructure;
