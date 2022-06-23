import { useState } from "react";
import Area from "./Area";
import Control from "./Control";
import styles from "./index.module.css";

const Standard = () => {
  const [variant, setVariant] = useState("light");
  const toggle = () => {
    const value = variant === "light" ? "dark" : "light";
    setVariant(value);
    console.log("setVariant", value);
  };

  return (
    <div className={styles.container}>
      <div>
        <Area variant={variant} />
      </div>
      <div className={styles.right}>
        <Control toggle={toggle} />
      </div>
    </div>
  );
};

export default Standard;
