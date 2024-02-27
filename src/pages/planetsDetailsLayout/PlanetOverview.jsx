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
      </div>
    </>
  );
}

export default PlanetOverview;
