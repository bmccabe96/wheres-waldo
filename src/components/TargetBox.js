import React from "react";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../utils/capitalize";

const TargetBox = (props) => {

  const characterList = props.characterList;
  const targetBoxCoords = props.targetBoxCoords;
  const checkCoords = props.checkCoords;



  if (targetBoxCoords) {
    
    return (
      <Box className="target-box" x={targetBoxCoords.x} y={targetBoxCoords.y}>
        {characterList.map((char, index) => {
          return (
            <button 
              key={index}
              onClick={(e) => checkCoords(e, char)}
            >{capitalizeFirstLetter(char)}</button>
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
  display: flex;
  flex-direction: column;
  color: white;
  background-color: black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 3px;
`


export default TargetBox;