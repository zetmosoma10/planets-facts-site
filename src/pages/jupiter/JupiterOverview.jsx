import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetOverview from "../planetsDetailsLayout/PlanetOverview";

function JupiterOverview() {
  const [jupterData, setJupiterData] = useState(useOutletContext());
  return (
    <>
      <PlanetOverview planetName={jupterData} />
    </>
  );
}

export default JupiterOverview;
