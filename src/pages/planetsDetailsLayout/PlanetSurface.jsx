import heroStyles from "../../components/hero/hero.module.css";

function PlanetSurface({ planetName }) {
  return (
    <>
      <div className={heroStyles.hero__image}>
        <div className={heroStyles.surfaceImg}>
          <img
            className={heroStyles.planetImg}
            src={`/${planetName.images.planet}`}
          />
          <img
            className={heroStyles.surfaceImg_small}
            src={`/${planetName.images.geology}`}
          />
        </div>
      </div>
      <div className={heroStyles.hero__text}>
        <h1>{planetName.name}</h1>
        <p>{planetName.geology.content}</p>
      </div>
    </>
  );
}

export default PlanetSurface;
