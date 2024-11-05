import React from "react";
import CharacterCard from "../components/character-card/CharacterCard";

interface Character {
  id: string;
  name: string;
  films: string[];
}

interface HomePageProps {
  characterData: Character[];
}

const HomePage: React.FC<HomePageProps> = ({ characterData }) => {
  return (
    <div>
      {characterData.map((character) => (
        <CharacterCard key={character.id} characterData={character} />
      ))}
    </div>
  );
};

export default HomePage;
