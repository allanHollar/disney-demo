import React from "react";
import { Link } from "react-router-dom";

interface Character {
  name: string;
  films: string[];
  imageUrl: string;
}

interface CharacterCardProps {
  characterData: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ characterData }) => {
  return (
    <div className="flex flex-col bg-white w-[248px] h-full text-center">
      <img
        src={characterData.imageUrl}
        alt={characterData.name}
        className="mx-auto mb-4 w-full h-[248px] object-cover"
      />
      <div className="flex-grow px-2 pb-[34px]">
        <h2 className="mb-4 font-bold text-lg leading-5">
          {characterData.name}
        </h2>
        <h3 className="mb-4 font-bold text-[15px] leading-4">Featured Films</h3>
        <ul className="mb-4">
          {characterData.films.slice(0, 4).map((film, index) => (
            <li className="font-normal text-xs leading-4" key={index}>
              {film}
              {index === 3 && characterData.films.length > 4 ? "..." : ""}
            </li>
          ))}
        </ul>
      </div>
      <Link
        to="/"
        className="mt-auto pb-9 font-black text-sm underline uppercase leading-[14px]"
      >
        View Profile
      </Link>
    </div>
  );
};

export default CharacterCard;
