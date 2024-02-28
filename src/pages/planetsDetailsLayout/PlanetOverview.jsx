import { Link } from "react-router-dom";
import layoutStyles from "../layout/layout.module.css";

function PlanetOverview({ planetName }) {
  return (
    <>
      <div className={layoutStyles.hero__image}>
        <img
          className={layoutStyles.planetImg}
          src={`/${planetName.images.planet}`}
        />
      </div>
      <div className={layoutStyles.hero__text}>
        <h1>{planetName.name}</h1>
        <p>{planetName.overview.content}</p>
        <p className={layoutStyles.hero__link}>
          Source :{" "}
          <Link target="_blank" to={planetName.overview.source}>
            Wikipedia
          </Link>
        </p>
      </div>
    </>
  );
}

export default PlanetOverview;
