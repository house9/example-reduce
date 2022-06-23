interface ControlProps {
  toggle: () => void;
}

const Control: React.FC<ControlProps> = ({ toggle }) => {
  return (
    <label style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        onClick={toggle}
        style={{ width: "40px", height: "40px" }}
      />{" "}
      Click Me
    </label>
  );
};

export default Control;
