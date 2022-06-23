import { useReducer } from "react";
import Area from "./Area";
import Control from "./Control";
import styles from "./index.module.css";
import { initialState, reducer } from "./state";

const Reduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.container}>
      <div>
        <Area state={state} />
      </div>
      <div className={styles.right}>
        <Control dispatch={dispatch} state={state} />
      </div>
    </div>
  );
};

export default Reduce;
