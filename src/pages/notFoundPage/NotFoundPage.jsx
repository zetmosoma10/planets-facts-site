import { Link } from "react-router-dom";
import notFoundPageStyles from "./notFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={`container ${notFoundPageStyles.notFound}`}>
      <h1>Not Found Page</h1>
      <small className={notFoundPageStyles.small}>Error: 404</small>
      <Link to="/" className={notFoundPageStyles.home_link}>
        Back to home
      </Link>
    </div>
  );
}

export default NotFoundPage;
