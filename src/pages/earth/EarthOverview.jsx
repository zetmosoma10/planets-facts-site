import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetOverview from "../planetsDetailsLayout/PlanetOverview";

function EarthOverview() {
  const [earthData, setEarthData] = useState(useOutletContext());
  return (
    <>
      <PlanetOverview planetName={earthData} />
    </>
  );
}

export default EarthOverview;
