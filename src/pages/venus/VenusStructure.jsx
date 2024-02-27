import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetStructure from "../planetsDetailsLayout/PlanetStructure";

function VenusStructure() {
  const [venusData, setVenusData] = useState(useOutletContext());
  return (
    <>
      <PlanetStructure planetName={venusData} />
    </>
  );
}

export default VenusStructure;
