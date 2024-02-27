import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetStructure from "../planetsDetailsLayout/PlanetStructure";

function MarsStructure() {
  const [marsData, setMarsData] = useState(useOutletContext());
  return (
    <>
      <PlanetStructure planetName={marsData} />
    </>
  );
}

export default MarsStructure;
