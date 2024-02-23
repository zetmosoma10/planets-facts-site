import heroStyles from "./hero.module.css";

function Hero() {
  return (
    <section>
      <div className={`${heroStyles.grid} ${heroStyles.grid_tablet}`}>
        <div className={heroStyles.hero__nav}>navigation</div>
        <div className={heroStyles.hero__image}>image</div>
        <div className={heroStyles.hero__text}>paragraph</div>
        <div className={heroStyles.hero__feature}>features</div>
      </div>
    </section>
  );
}

export default Hero;
