import { Link } from "react-router-dom";

const CharacterCard = () => {
  return (
    <div>
      <h2>Character Name</h2>
      <h3>Featureed Films</h3>
      <ul>
        <li>Film</li>
      </ul>
      <Link to="/charcter">View Profile</Link>
    </div>
  );
};

export default CharacterCard;
