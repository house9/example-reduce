import styles from "./index.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Beer } from "./beer";
import Beers from "./Beers";

const Standard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Beer[]>([]);
  // const { isLoading, data } = useQuery(...)

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>{loading && "Loading..."}</div>
      <div className={styles.right}>
        <Beers beers={data} />
      </div>
    </div>
  );
};

export default Standard;
