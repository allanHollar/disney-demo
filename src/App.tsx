import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import { fetchCharacterList } from "./services/charactersApi";
import { Character } from "./types/types";

interface AppProps {
  characterData: Character[];
}

const App: React.FC<AppProps> = ({ characterData }) => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    console.log("aaa characterList", characterList);
    setSearchQuery(query);
  };

  // Filter characters based on search query
  const filteredCharacters = characterList
    ? characterList.filter((character) =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    const getCharacterList = async () => {
      try {
        const response = await fetchCharacterList();
        setCharacterList(response.data); // Extracting the character array from the response
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getCharacterList();
  }, []);

  return (
    <Router>
      <>
        <Header onSearch={handleSearch} />
        <div className="flex justify-center w-full">
          <div className="flex flex-row bg-[#F1F2F3] w-[1200px]">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    characterData={characterList}
                    filteredCharacters={filteredCharacters}
                  />
                }
              />
              <Route
                path="/character"
                element={
                  <HomePage
                    characterData={characterList}
                    filteredCharacters={filteredCharacters}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
};

export default App;
