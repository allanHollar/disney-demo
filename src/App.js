import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import { fetchCharacterList } from "./services/charactersApi";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [isLoading, setIsLoadiong] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharacterList = async () => {
      try {
        const data = await fetchCharacterList();
        setCharacterList(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoadiong(false);
      }
    };

    getCharacterList();
  }, []);

  useEffect(() => {
    console.log("aaa characterList", characterList);
  });

  return (
    <Router>
      <>
        <Header />
        <div className="flex justify-center w-full">
          <div className="bg-[#F1F2F3] flex flex-row w-[1200px] p-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/character" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
