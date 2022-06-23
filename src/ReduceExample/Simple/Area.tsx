import classnames from "classnames";
import styles from "./area.module.css";
import { State } from "./state";

interface AreaProps {
  state: State;
}

const Area: React.FC<AreaProps> = ({ state }) => {
  const { variant } = state;
  const classes = classnames(styles.container, {
    [styles.light]: variant === "light",
    [styles.dark]: variant === "dark",
  });

  return <div className={classes}>Area</div>;
};

export default Area;
