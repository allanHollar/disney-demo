import React from "react";
import CharacterCard from "../components/character-card/CharacterCard";

interface Character {
  _id: string;
  name: string;
  films: string[];
  imageUrl: string;
}

interface HomePageProps {
  characterData: Character[];
}

const HomePage: React.FC<HomePageProps> = ({ characterData }) => {
  return (
    <div className="gap-4 grid grid-cols-4 p-4">
      {characterData.slice(0, 8).map((character) => (
        <CharacterCard key={character._id} characterData={character} />
      ))}
    </div>
  );
};

export default HomePage;
