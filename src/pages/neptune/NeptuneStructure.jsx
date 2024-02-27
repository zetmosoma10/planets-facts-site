import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetStructure from "../planetsDetailsLayout/PlanetStructure";

function NeptuneStructure() {
  const [neptuneData, setNeptuneData] = useState(useOutletContext());
  return (
    <>
      <PlanetStructure planetName={neptuneData} />
    </>
  );
}

export default NeptuneStructure;
