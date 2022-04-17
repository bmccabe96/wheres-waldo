import React from "react";
import GameScreen from "./components/GameScreen";
import Home from "./components/Home";
import Leaderboards from "./components/Leaderboards";
import { BrowserRouter, Routes, Route, HashRouter, useNavigate } from "react-router-dom";



import "./App.css";

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path="/gamelevel" element={<GameScreen level={1} navigate={navigate} />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
      </Routes>
    </div>
  );
}




export default App;


