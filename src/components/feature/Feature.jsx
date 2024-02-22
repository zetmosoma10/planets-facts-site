import featureStyles from "./feature.module.css";

function Feature() {
  return (
    <div className={featureStyles.feature}>
      <p className={featureStyles.feature__text}>ROTATION TIME</p>
      <h3 className={featureStyles.feature__value}>58.6 days</h3>
    </div>
  );
}

export default Feature;
