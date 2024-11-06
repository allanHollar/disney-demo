import React, { useEffect } from "react";
import CharacterCard from "../components/character-card";
import FeaturedCharacters from "../components/featured-characters";
import { Character } from "../types/types";

interface HomePageProps {
  characterData: Character[];
  filteredCharacters: Character[];
}

const HomePage: React.FC<HomePageProps> = ({
  characterData,
  filteredCharacters,
}) => {
  const charactersToDisplay =
    filteredCharacters.length > 0 ? filteredCharacters : characterData;

  useEffect(() => {
    console.log("aaa filteredCharacters", filteredCharacters);
  });

  return (
    <div className="flex flex-col items-center w-full">
      <div className="gap-5 grid grid-cols-4 mx-auto p-20">
        {charactersToDisplay.slice(0, 8).map((character) => (
          <CharacterCard key={character._id} characterData={character} />
        ))}
      </div>
      <FeaturedCharacters characterData={characterData} />
    </div>
  );
};

export default HomePage;
