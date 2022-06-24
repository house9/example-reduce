import axios from "axios";
import styles from "./styles.module.css";

interface ErrorProps {
  error: Error | undefined;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  if (!error) return null;

  const message = errorMessage(error);

  return <div className={styles.container}>{message}</div>;
};

export default Error;

function errorMessage(error: Error): string {
  const message = axios.isAxiosError(error)
    ? error.response?.status.toString()
    : error.toString();

  return message || "";
}
