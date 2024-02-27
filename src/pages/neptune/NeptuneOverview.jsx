import { useState } from "react";
import { useOutletContext } from "react-router";
import PlanetOverview from "../planetsDetailsLayout/PlanetOverview";

function NeptuneOverview() {
  const [neptuneData, setNeptuneData] = useState(useOutletContext());
  return (
    <>
      <PlanetOverview planetName={neptuneData} />
    </>
  );
}

export default NeptuneOverview;
