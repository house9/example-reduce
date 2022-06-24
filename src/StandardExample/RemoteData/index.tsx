import Beers from "./Beers";
import Error from "../../Error";
import axios from "axios";
import styles from "./index.module.css";
import { Beer } from "./beer";
import { useEffect, useState } from "react";

const Standard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState<Beer[]>([]);
  // const { isLoading, data, error } = useQuery(...)

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {error && <Error error={error} />}
        {loading && "Loading..."}
      </div>
      <div className={styles.right}>
        <Beers beers={data} />
      </div>
    </div>
  );
};

export default Standard;
