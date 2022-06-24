import Beers from "./Beers";
import Error from "../../Error";
import styles from "./index.module.css";
import { fetchBeers } from "./api";
import { initialState, reducer } from "./state";
import { useEffect, useReducer } from "react";

const Reduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { error, loading } = state;

  useEffect(() => {
    fetchBeers(dispatch);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {error && <Error error={error} />}
        {loading && "Loading..."}
      </div>
      <div className={styles.right}>
        <Beers state={state} />
      </div>
    </div>
  );
};

export default Reduce;
