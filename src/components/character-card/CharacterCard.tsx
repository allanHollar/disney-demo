import React from "react";

interface Character {
  id: string;
  name: string;
  films: string[];
}

interface CharacterCardProps {
  characterData: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ characterData }) => {
  return (
    <div>
      <h2>{characterData.name}</h2>
      <h3>Featured Films</h3>
      <ul>
        {characterData.films.map((film, index) => (
          <li key={index}>{film}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterCard;
