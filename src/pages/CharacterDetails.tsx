import React from "react";
import { useParams } from "react-router-dom";
import FeaturedCharacters from "../components/featured-characters";
import Footer from "../components/footer";
import { Character } from "../types/types";
import { format } from "date-fns";
import { format as formatWithSuffix } from "date-fns-tz";

interface CharacterDetailsProps {
  characterList: Character[];
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  characterList,
}) => {
  const { name } = useParams<{ name: string }>(); // Retrieve name from URL parameters

  // Find the specific character based on the name parameter
  const selectedCharacter = characterList.find(
    (character) => character.name === name
  );

  if (!selectedCharacter) {
    return <p>Character not found.</p>;
  }
  const dateStr = selectedCharacter.updatedAt;
  const formattedDate = format(new Date(dateStr ?? ""), "MMMM do, yyyy");

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-start bg-gray-100 p-10 w-full">
        <div className="mr-10">
          <img
            src={selectedCharacter.imageUrl}
            alt={selectedCharacter.name}
            className="drop-shadow-md shadow-md rounded-lg w-[439px] h-[529px] object-cover"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="font-semibold text-4xl">{selectedCharacter.name}</h1>

          <p className="mb-6 font-normal text-xs">
            Last Updated {formattedDate}{" "}
          </p>

          {selectedCharacter.films && selectedCharacter.films.length > 0 && (
            <div>
              <h2 className="mb-2 font-bold text-lg">Featured Films</h2>
              <ul className="mb-6 ml-6 font-semibold text-[15px] leading-6 list-disc list-outside">
                {selectedCharacter.films.map((film, index) => (
                  <li className="ml-0" key={index}>
                    {film}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedCharacter.shortFilms &&
            selectedCharacter.shortFilms.length > 0 && (
              <div>
                <h2 className="mb-2 font-bold text-lg">Short Films</h2>
                <ul className="mb-6 ml-6 font-semibold text-[15px] leading-6 list-disc list-outside">
                  {selectedCharacter.shortFilms.map((film, index) => (
                    <li className="ml-0" key={index}>
                      {film}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {selectedCharacter.tvShows &&
            selectedCharacter.tvShows.length > 0 && (
              <>
                <h2 className="mb-2 font-bold text-lg">TV Shows</h2>
                <ul className="mb-6 ml-6 font-semibold text-[15px] leading-6 list-disc list-outside">
                  {selectedCharacter.tvShows.map((film, index) => (
                    <li className="ml-0" key={index}>
                      {film}
                    </li>
                  ))}
                </ul>
              </>
            )}

          <button
            onClick={() => window.open(selectedCharacter.sourceUrl, "_blank")}
            className="bg-[#054553] hover:bg-teal-700 drop-shadow-lg mt-6 px-6 py-3 rounded-lg w-[270px] h-[48px] font-semibold text-sm text-white"
          >
            Explore More Character Details
          </button>
        </div>
      </div>
      {/* Pass full character list to FeaturedCharacters */}
      <FeaturedCharacters characterData={characterList} />
      <Footer />
    </div>
  );
};

export default CharacterDetails;
