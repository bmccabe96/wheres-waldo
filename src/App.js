import db from "./utils/firebase";
import { collection, query, orderBy, doc, getDocs, where, setDoc } from "@firebase/firestore"
import backgroundImage from './assets/wheres-waldo-img.jpeg';
import styled from "styled-components";
import "./App.css";


function App() {

  // const addData = async () => {

  //   for(let x=591; x<=627; x++) {
  //     for(let y=739; y<=775; y++) {
  //       await setDoc(doc(db, "locations", `${'odlaw-' + x + '-' + y}`), {
  //         name: 'odlaw',
  //         level: 1,
  //         x: x,
  //         y: y
  //       });
  //     }
  //   }
  // }

  const handleImgClick = (e) => {
    console.log(e);
    const coords =  {
      x: e.pageX,
      y: e.pageY// - e.target.offsetHeight,
    }
    console.log(coords);
    //checkCoords(coords);
  }

  async function checkCoords(coords) {
    const locations = collection(db, "locations");
    const q = query(
      locations, 
      where("name", "==", 'odlaw'),
      where("x", "==", coords.x),
      where("y", "==", coords.y),
    );
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  }

  return (
    <div className="App">
      <button style={{display: 'block'}}>tgtg</button>
      <button>fdfsfs</button>
      <div className="main-container" onClick={handleImgClick}>
        <img alt="background" className="background-img" src={backgroundImage} />
        <div className="targeting-box"></div>
      </div>
    </div>
  );
}




export default App;


/*
  e.pageX, e.pageY-e.target.offsetHeight
  WALDO: (1623:1659 , 825:885)
  ODLAW:(591:627, 739:775)
  WIZARD: 
*/
