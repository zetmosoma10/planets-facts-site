import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetOverview from "../planetsDetailsLayout/PlanetOverview";

function SaturnOverview() {
  const [saturnData, setSaturnData] = useState(useOutletContext());
  return (
    <>
      <PlanetOverview planetName={saturnData} />
    </>
  );
}

export default SaturnOverview;
