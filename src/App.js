import db from "./utils/firebase";
import { collection, query, orderBy, doc, getDocs, where, addDoc } from "@firebase/firestore"
import backgroundImage from './assets/wheres-waldo-img.jpeg';
import styled from "styled-components";
import "./App.css";


function App() {

  // const addData = async () => {
  //   for(let x=85; x<=86; x++) {
  //     for(let y=71; y<=77; y++) {
  //       await addDoc(collection(db, 'locations'), {
  //         name: 'waldo',
  //         level: 1,
  //         x: x/100,
  //         y: y/100
  //       });
  //       console.log("added: ", x/100, y/100);
  //     }
  //   }
  // }

  const handleImgClick = (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top;  //y position within the element.
    const coords =  {
      x: Number((x / e.target.offsetWidth).toFixed(2)),
      y: Number((y / e.target.offsetHeight).toFixed(2))
    }
    console.log(coords);
    checkCoords(coords);
  }

  async function checkCoords(coords) {
    const locations = collection(db, "locations");
    const q = query(
      locations, 
      where("name", "in", ['waldo', 'odlaw', 'wizard']),
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
      <button style={{display: 'block'}}>tgtg</button>
      <button style={{display: 'block'}}>tgtg</button>
      <button style={{display: 'block'}}>tgtg</button>
      <div className="main-container" onClick={handleImgClick}>
        <img alt="background" className="background-img" src={backgroundImage} />
      </div>
    </div>
  );
}




export default App;


