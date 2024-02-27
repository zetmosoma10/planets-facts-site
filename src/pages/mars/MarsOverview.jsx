import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetOverview from "../planetsDetailsLayout/PlanetOverview";

function MarsOverview() {
  const [marsData, setMarsData] = useState(useOutletContext());
  return (
    <>
      <PlanetOverview planetName={marsData} />
    </>
  );
}

export default MarsOverview;
