import React from "react";
import styled from "styled-components";

const TargetBox = (props) => {

  const characterList = props.characterList;
  const targetBoxCoords = props.targetBoxCoords;
  const checkCoords = props.checkCoords;



  if (targetBoxCoords) {
    
    return (
      <Box x={targetBoxCoords.x} y={targetBoxCoords.y}>
        {characterList.map((char, index) => {
          return (
            <button 
              key={index}
              onClick={() => checkCoords(char)}
            >{char}</button>
          )
        })}
      </Box>
    )
  }
  
}

const Box = styled.div`
  position: absolute;
  top: ${(props) => (props.y + 10)}px;
  left: ${(props) => (props.x + 10)}px;
  width: 100px;
  height: auto;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: black;
`


export default TargetBox;