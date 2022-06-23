import styles from "./index.module.css";
import { useEffect, useReducer } from "react";
import Beers from "./Beers";
import { initialState, reducer } from "./state";
import { fetchBeers } from "./api";

const Reduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading } = state;

  useEffect(() => {
    fetchBeers(dispatch);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>{loading && "Loading..."}</div>
      <div className={styles.right}>
        <Beers state={state} />
      </div>
    </div>
  );
};

export default Reduce;
