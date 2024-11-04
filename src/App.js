import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchCharacterList } from './services/charactersApi'

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
    }

    getCharacterList()
  }
  , []);

  useEffect(() => {
   console.log('aaa characterList', characterList);
  })

  return (
    <div className="App mt-6">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
