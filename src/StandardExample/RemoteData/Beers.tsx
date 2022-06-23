import { Beer } from "./beer";

interface BeersProps {
  beers: Beer[];
}

const Beers: React.FC<BeersProps> = ({ beers }) => {
  return (
    <ul>
      {beers.map((item) => (
        <li key={item.id}>{item.tagline}</li>
      ))}
    </ul>
  );
};

export default Beers;
