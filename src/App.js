import React, { useState } from "react";
import GameScreen from "./components/GameScreen";
import Home from "./components/Home";
import Leaderboards from "./components/Leaderboards";
import {  Routes, Route, useNavigate } from "react-router-dom";



import "./App.css";

function App() {

  const [level, setLevel] = useState();
  const [characterList, setCharacterList] = useState();
  const [canvasImg, setCanvasImg] = useState();

  let navigate = useNavigate();

  const handleLevelSelect = (level, characterList, img) => {
    setCharacterList(characterList);
    setLevel(level);
    setCanvasImg(img);
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
            img={canvasImg}
          />} 
        />
        <Route 
          path="/leaderboards" 
          element={<Leaderboards 
            navigate={navigate} 
          />} 
        />
      </Routes>
    </div>
  );
}




export default App;


