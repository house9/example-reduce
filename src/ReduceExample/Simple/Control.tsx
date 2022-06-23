import { Action, ActionType } from "./state";
import styles from "./control.module.css";

interface ControlProps {
  dispatch: React.Dispatch<Action>;
}

const Control: React.FC<ControlProps> = ({ dispatch }) => {
  const toggle = () => {
    dispatch({ type: ActionType.TOGGLE_VARIANT });
  };

  return (
    <label style={{ display: "flex", alignItems: "center" }}>
      <input type="checkbox" onClick={toggle} className={styles.checkbox} />{" "}
      Click Me
    </label>
  );
};

export default Control;
