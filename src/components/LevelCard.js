import React from "react";
import styled from "styled-components";


const LevelCard = (props) => {
  const level = props.level;
  const img = props.img;
  const handleLevelSelect = props.handleLevelSelect;
  const characterList = props.characterList;


  return (
    <Card onClick={() => handleLevelSelect(level, characterList)}>
      <h3>Level: {level}</h3>
      <ImgContainer>
        <img alt={`level ${level}`} src={img} style={myImgStyle} />
      </ImgContainer>
    </Card>
  )
}

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-left: 5px solid rgb(255,0,0, 0.4);
  padding: 30px 0;
  cursor: pointer;
`

const ImgContainer = styled.div`
  width: 250px;
  height: auto;
  border: 2px dashed rgb(255,0,0, 0.4);
`

const myImgStyle = {
  width: "100%",
  height: "auto"
}

export default LevelCard;