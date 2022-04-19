import React from "react";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../utils/capitalize";


const HeaderLevel = (props) => {

  const characterList = props.characterList;
  const level = props.level;
  const headHome = props.headHome;

  return (
    <Container>
      <button onClick={headHome} className="btn" style={myBtnStyle}>Home</button>
      <div style={{fontWeight: 'bold'}} >Level: {level}</div>
      <CharacterList>
      <div>Remaining:</div>
        {characterList.map((char, index) => {
          return (
            <CharacterContainer key={index}>
              <div>{capitalizeFirstLetter(char.name)}</div>
              <ImgContainer>
                <img alt={char.name} src={char.img} style={myImgStyle}/>
              </ImgContainer>
            </CharacterContainer>
          )
        })}
      </CharacterList>
    </Container>
  )
}

export default HeaderLevel;

const Container = styled.div`
  height: auto;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10vw;
  border-bottom: 5px solid red;
  border-top: 5px solid red;
  // position: fixed;
  // top: 0;
  // left: 0;
  // z-index: 100;
`

const CharacterList = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`

const CharacterContainer = styled.div`
  display: flex;
  align-items: center;
`

const ImgContainer = styled.div`
  height: 50px;
  width: 15px;
`
const myImgStyle = {
  width: 'auto',
  height: '100%'
}

const myBtnStyle = {
  height: 'fit-content',
  color: 'white',
  cursor: 'pointer',
  padding: '5px 15px',
  backgroundColor: 'red',
  borderRadius: '8px',
  border: 'none',
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
}