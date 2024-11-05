import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import { fetchCharacterList } from "./services/charactersApi";

interface Character {
  id: string;
  name: string;
  films: string[];
}

function App() {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        <Header />
        <div className="flex justify-center w-full">
          <div className="flex flex-row bg-[#F1F2F3] p-20 w-[1200px]">
            <Routes>
              <Route
                path="/"
                element={<HomePage characterData={characterList} />}
              />
              <Route
                path="/character"
                element={<HomePage characterData={characterList} />}
              />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
