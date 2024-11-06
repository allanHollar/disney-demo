import React, { useEffect } from "react";
import CharacterCard from "../components/character-card";
import FeaturedCharacters from "../components/featured-characters";
import { Character } from "../types/types";
import Footer from "../components/footer";

interface HomePageProps {
  characterData: Character[];
  filteredCharacters: Character[];
  searchQuery: string;
}

const HomePage: React.FC<HomePageProps> = ({
  characterData,
  filteredCharacters,
  searchQuery,
}) => {
  const charactersToDisplay =
    filteredCharacters.length > 0 ? filteredCharacters : characterData;

  useEffect(() => {
    console.log("Search query:", searchQuery);
  }, [searchQuery]);

  return (
    <div className="flex flex-col items-center w-full">
      {searchQuery.length > 0 && (
        <p className="mt-10 font-normal text-3xl text-center">
          Search Results for - {searchQuery}
        </p>
      )}
      <div className="gap-5 grid grid-cols-4 mx-auto p-20">
        {charactersToDisplay.slice(0, 8).map((character, index) => (
          <div
            key={character._id}
            className={`transition-transform duration-[700ms] ease-in-out delay-${
              index * 150
            }ms ${searchQuery.length > 0 ? "translate-y-0" : "translate-y-8"}`}
          >
            <CharacterCard characterData={character} />
          </div>
        ))}
      </div>
      <FeaturedCharacters characterData={characterData} />
      <Footer />
    </div>
  );
};

export default HomePage;
