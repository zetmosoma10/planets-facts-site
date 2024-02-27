import heroStyles from "../../components/hero/hero.module.css";

function PlanetOverview({ planetName }) {
  return (
    <>
      <div className={heroStyles.hero__image}>
        <img
          className={heroStyles.planetImg}
          src={`/${planetName.images.planet}`}
        />
      </div>
      <div className={heroStyles.hero__text}>
        <h1>{planetName.name}</h1>
        <p>{planetName.overview.content}</p>
      </div>
    </>
  );
}

export default PlanetOverview;
