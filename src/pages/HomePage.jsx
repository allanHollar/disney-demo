import React from "react";
import CharacterCard from "../components/character-card/CharacterCard";

const HomePage = ({ characterData }) => {
  return (
    <div>
      <CharacterCard characterData={characterData} />
    </div>
  );
};

export default HomePage;
