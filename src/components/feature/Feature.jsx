import featureStyles from "./feature.module.css";

function Feature({ children }) {
  return <div className={featureStyles.feature}>{children}</div>;
}

export default Feature;
