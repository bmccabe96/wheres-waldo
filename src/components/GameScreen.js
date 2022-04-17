import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import HeaderLevel from "./HeaderLevel";
import WonLevel from "./WonLevel";
import db from "../utils/firebase";
import { collection, query, getDocs, where, addDoc, updateDoc, doc, getDoc } from "@firebase/firestore";
import waldo from '../assets/waldo.png';
import odlaw from '../assets/odlaw.png';
import wizard from '../assets/wizard.png';


const GameScreen = (props) => {

  const [targetBoxCoords, setTargetBoxCoords] = useState(null);
  const [characterList, setCharacterList] = useState([
    { name: 'waldo', img: waldo },
    { name: 'odlaw', img: odlaw },
    { name: 'wizard', img: wizard },
  ]);
  const [currentCoords, setCurrentCoords] = useState(null);
  const [foundAll, setFoundAll] = useState(false);
  const [currentGame, setCurrentGame] = useState(() => startRound());
  const [score, setScore] = useState(null);

  const level = props.level;


  useEffect(() => {
    if(characterList.length === 0) {
      finishRound(); //this updates matches DB
      getScore(); //this reads score from matches DB and then opens the WonLevel screen
    }
  }, [characterList]);


  const openTargetBox = (e) => {
    if(e.target.parentElement.children.length > 1) {
      setTargetBoxCoords(null);
    }
    else {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left; //x position within the element.
      let y = e.clientY - rect.top;  //y position within the element.
      setTargetBoxCoords({ x, y });
      const coords =  {
        x: Number((x / e.target.offsetWidth).toFixed(2)),
        y: Number((y / e.target.offsetHeight).toFixed(2))
      }
      setCurrentCoords(coords);
    }
  }

  async function checkCoords(e, characterSelection) {
    e.stopPropagation(); //without this, target box doesn't close for like half a second
    const locations = collection(db, "locations");
    const q = query(
      locations, 
      where("name", "==", characterSelection),
      where("x", "==", currentCoords.x),
      where("y", "==", currentCoords.y),
      where("level", "==", 1)
    );
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
      if(doc.data().name === characterSelection) {
        const newCharacterList = characterList.filter((char) => char.name !== characterSelection);
        setCharacterList(newCharacterList);
      }
    });
    setTargetBoxCoords(null);
  }

  async function getScore() {
    const docRef = doc(db, 'matches', currentGame);
    const docSnap = await getDoc(docRef);
    const start = docSnap.data().time_start;
    const end = docSnap.data().time_end;
    setScore((end-start)/1000);
    setFoundAll(true);
  }

  async function startRound() {
    const docRef = await addDoc(collection(db, 'matches'), {
      time_start: Date.now(),
      time_end: null
    });
    setCurrentGame(docRef.id);
  }

  async function finishRound() {
    await updateDoc(doc(db, 'matches', currentGame), {
      time_end: Date.now(),
    });
  }

  async function submitScore(e) {
    e.preventDefault();
    const name = e.target[0].value;
    await addDoc(collection(db, 'leaderboards'), {
      level: level,
      name: name,
      time: score,
    });
  }

  return (
    <div className="game-screen">
      <HeaderLevel level={1} characterList={characterList}/>
      <Canvas 
        openTargetBox={openTargetBox}
        checkCoords={checkCoords}
        targetBoxCoords={targetBoxCoords}
        characterList={characterList}
      />
      {foundAll ? <WonLevel submitScore={submitScore} score={score} level={level}/> : null}
    </div>
  )
}

export default GameScreen;