import React, { useEffect, useState } from "react";
import Canvas from "./components/Canvas";
import db from "./utils/firebase";
import { collection, query, getDocs, where } from "@firebase/firestore"
import "./App.css";


function App() {

  const [targetBoxCoords, setTargetBoxCoords] = useState(null);
  const [characterList, setCharacterList] = useState(['waldo', 'odlaw', 'wizard']);
  const [currentCoords, setCurrentCoords] = useState(null);

  useEffect(() => {

  })

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
    );
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
      if(doc.data().name === characterSelection) {
        const newCharacterList = characterList.filter((char) => char !== characterSelection);
        setCharacterList(newCharacterList);
      }
    });
    setTargetBoxCoords(null);
  }

  

  return (
    <div className="App">
      <Canvas 
        openTargetBox={openTargetBox}
        checkCoords={checkCoords}
        targetBoxCoords={targetBoxCoords}
        characterList={characterList}
      />
    </div>
  );
}




export default App;


