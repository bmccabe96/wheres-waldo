import React, { useState } from "react";
import GameScreen from "./components/GameScreen";
import Home from "./components/Home";
import Leaderboards from "./components/Leaderboards";
import { BrowserRouter, Routes, Route, HashRouter, useNavigate } from "react-router-dom";



import "./App.css";

function App() {

  const [level, setLevel] = useState();
  const [characterList, setCharacterList] = useState();

  let navigate = useNavigate();

  const handleLevelSelect = (level, characterList) => {
    setCharacterList(characterList);
    setLevel(level);
    navigate("/gamelevel");
  }

  const handleLeaderBoardsClick = () => {
    navigate("/leaderboards");
  }

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={<Home 
            navigate={navigate} 
            handleLevelSelect={handleLevelSelect}
            handleLeaderBoardsClick={handleLeaderBoardsClick}
          />} 
        />
        <Route 
          path="/gamelevel" 
          element={<GameScreen 
            level={level} 
            characterList={characterList} 
            navigate={navigate} 
          />} 
        />
        <Route 
          path="/leaderboards" 
          element={<Leaderboards />} 
        />
      </Routes>
    </div>
  );
}




export default App;


