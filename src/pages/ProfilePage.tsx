import React from "react";
import FeaturedCharacters from "../components/featured-characters";
import Footer from "../components/footer";
import { Character } from "../types/types";

interface CharacterDetailsProps {
  characterList: Character[];
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-start bg-gray-100 p-10 w-full">Profile</div>
      <Footer />
    </div>
  );
};

export default CharacterDetails;
