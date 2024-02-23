import Feature from "../feature/Feature";
import SubNavbar from "../subNavbar/SubNavbar";
import heroStyles from "./hero.module.css";

function Hero() {
  return (
    <section className="container">
      <div className={`${heroStyles.grid} ${heroStyles.grid_tablet}`}>
        <div className={heroStyles.hero__nav}>
          <SubNavbar />
        </div>
        <div className={heroStyles.hero__image}>
          <img src="assets/planet-mercury.svg" />
        </div>
        <div className={heroStyles.hero__text}>
          <h1>Mercury</h1>
          <p>
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </p>
        </div>
        <div className={heroStyles.hero__feature}>
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </div>
      </div>
    </section>
  );
}

export default Hero;
