import React from "react";
import backgroundImage from '../assets/wheres-waldo-img.jpeg';
import TargetBox from './TargetBox';


const Canvas = (props) => {

  const { openTargetBox, checkCoords, targetBoxCoords, characterList } = props;

  return (
    <div className="main-container" onClick={openTargetBox}>
      <img  style={myImgStyle} alt="background" className="background-img" src={backgroundImage} />
      <TargetBox 
        targetBoxCoords={targetBoxCoords}
        checkCoords={checkCoords}
        characterList={characterList}
      />
    </div>
  )
}

const myImgStyle = {
  width: '100%',
  height: 'auto',

}

export default Canvas;