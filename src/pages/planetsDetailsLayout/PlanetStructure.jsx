import layoutStyles from "../layout/layout.module.css";

function PlanetStructure({ planetName }) {
  return (
    <>
      <div className={layoutStyles.hero__image}>
        <img
          className={layoutStyles.planetImg}
          src={`/${planetName.images.internal}`}
        />
      </div>
      <div className={layoutStyles.hero__text}>
        <h1>{planetName.name}</h1>
        <p>{planetName.structure.content} </p>
      </div>
    </>
  );
}

export default PlanetStructure;
