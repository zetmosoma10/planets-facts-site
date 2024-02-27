import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetOverview from "../planetsDetailsLayout/PlanetOverview";

function UranusOverview() {
  const [uranusData, setUranusData] = useState(useOutletContext());
  return (
    <>
      <PlanetOverview planetName={uranusData} />
    </>
  );
}

export default UranusOverview;
