import heroStyles from "../../components/hero/hero.module.css";

function PlanetStructure({ planetName }) {
  return (
    <>
      <div className={heroStyles.hero__image}>
        <img
          className={heroStyles.planetImg}
          src={`/${planetName.images.internal}`}
        />
      </div>
      <div className={heroStyles.hero__text}>
        <h1>{planetName.name}</h1>
        <p>{planetName.structure.content} </p>
      </div>
    </>
  );
}

export default PlanetStructure;
