import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "../character-card";

interface Character {
  _id: string;
  name: string;
  films: string[];
  imageUrl: string;
}

interface FeaturedCharacterProps {
  characterData: Character[];
}

const FeaturedCharacters: React.FC<FeaturedCharacterProps> = ({
  characterData,
}) => {
  const getRandomCharacters = (
    characters: Character[],
    count: number
  ): Character[] => {
    const shuffled = [...characters].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomCharacters = getRandomCharacters(characterData, 4);

  return (
    <div className="bg-[#054553] py-20 p-20 pt-10 pb-20 w-full">
      <h2 className="pb-10 font-normal text-3xl text-center text-white">
        Featured Characters!
      </h2>
      <div className="justify-items-center grid grid-cols-4">
        {randomCharacters.map((character) => (
          <CharacterCard key={character._id} characterData={character} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCharacters;
