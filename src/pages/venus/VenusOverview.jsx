import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetOverview from "../planetsDetailsLayout/PlanetOverview";

function VenusOverview() {
  const [venusData, setVenusData] = useState(useOutletContext());
  return (
    <>
      <PlanetOverview planetName={venusData} />
    </>
  );
}

export default VenusOverview;
