import styles from "./area.module.css";
import classnames from "classnames";

interface AreaProps {
  variant: string;
}

const Area: React.FC<AreaProps> = ({ variant }) => {
  const classes = classnames(styles.container, {
    [styles.light]: variant === "light",
    [styles.dark]: variant === "dark",
  });

  return <div className={classes}>Area</div>;
};

export default Area;
