import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navigation}>
        <li>
          <Link className={styles.link} to="/">
            Simple
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/remote">
            Remote
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
