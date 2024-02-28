import { Link } from "react-router-dom";
import layoutStyles from "../layout/layout.module.css";

function PlanetSurface({ planetName }) {
  return (
    <>
      <div className={layoutStyles.hero__image}>
        <div className={layoutStyles.surfaceImg}>
          <img
            className={layoutStyles.planetImg}
            src={`/${planetName.images.planet}`}
          />
          <img
            className={layoutStyles.surfaceImg_small}
            src={`/${planetName.images.geology}`}
          />
        </div>
      </div>
      <div className={layoutStyles.hero__text}>
        <h1>{planetName.name}</h1>
        <p>{planetName.geology.content}</p>
        <p className={layoutStyles.hero__link}>
          Source :{" "}
          <Link target="_blank" to={planetName.geology.source}>
            Wikipedia
          </Link>
        </p>
      </div>
    </>
  );
}

export default PlanetSurface;
