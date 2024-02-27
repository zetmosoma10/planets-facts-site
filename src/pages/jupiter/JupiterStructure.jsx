import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetStructure from "../planetsDetailsLayout/PlanetStructure";

function JupiterStructure() {
  const [jupiterData, setJupiterData] = useState(useOutletContext());
  return (
    <>
      <PlanetStructure planetName={jupiterData} />
    </>
  );
}

export default JupiterStructure;
