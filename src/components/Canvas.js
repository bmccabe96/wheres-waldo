import React from "react";
import backgroundImage from '../assets/wheres-waldo-img.jpeg';
import TargetBox from './TargetBox';

const Canvas = (props) => {

  const { openTargetBox, checkCoords, targetBoxCoords, characterList } = props;

  return (
    <div className="main-container" onClick={openTargetBox}>
      <img alt="background" className="background-img" src={backgroundImage} />
      <TargetBox 
        targetBoxCoords={targetBoxCoords}
        checkCoords={checkCoords}
        characterList={characterList}
      />
    </div>
  )
}

export default Canvas;