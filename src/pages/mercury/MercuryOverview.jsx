import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetOverview from "../planetsDetailsLayout/PlanetOverview";

function MercuryOverview() {
  const [mercuryData, setMercuryData] = useState(useOutletContext());
  return (
    <>
      <PlanetOverview planetName={mercuryData} />
    </>
  );
}

export default MercuryOverview;
