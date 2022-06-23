import { State } from "./state";

interface BeersProps {
  state: State;
}

const Beers: React.FC<BeersProps> = ({ state }) => {
  const { beers } = state;

  return (
    <ul>
      {beers.map((item) => (
        <li key={item.id}>{item.tagline}</li>
      ))}
    </ul>
  );
};

export default Beers;
