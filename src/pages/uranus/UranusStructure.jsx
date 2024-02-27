import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetStructure from "../planetsDetailsLayout/PlanetStructure";

function UranusStructure() {
  const [uranusData, setUranusData] = useState(useOutletContext());
  return (
    <>
      <PlanetStructure planetName={uranusData} />
    </>
  );
}

export default UranusStructure;
