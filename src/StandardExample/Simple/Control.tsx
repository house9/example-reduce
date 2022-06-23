import styles from "./control.module.css";

interface ControlProps {
  toggle: () => void;
}

const Control: React.FC<ControlProps> = ({ toggle }) => {
  return (
    <label style={{ display: "flex", alignItems: "center" }}>
      <input type="checkbox" onClick={toggle} className={styles.checkbox} />{" "}
      Click Me
    </label>
  );
};

export default Control;
