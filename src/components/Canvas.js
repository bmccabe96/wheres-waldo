import React from "react";
import TargetBox from './TargetBox';


const Canvas = (props) => {

  const { openTargetBox, checkCoords, targetBoxCoords, characterList, backgroundImage } = props;

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
  width: '92%',
  height: 'auto',
  boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 8px',
  marginTop: '8px'
}

export default Canvas;