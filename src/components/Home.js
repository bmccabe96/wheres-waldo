import React from "react";
import styled from "styled-components";
import LevelCard from "./LevelCard";
import HeaderHome from "./HeaderHome";
import waldo from '../assets/waldo.png';
import odlaw from '../assets/odlaw.png';
import wizard from '../assets/wizard.png';
import levelOneImg from '../assets/wheres-waldo-img.jpeg';


const Home = (props) => {

  const leaderboards = props.handleLeaderBoardsClick;
  const handleLevelSelect = props.handleLevelSelect;

  const levelOneCharacters = [
    { name: 'waldo', img: waldo },
    { name: 'odlaw', img: odlaw },
    { name: 'wizard', img: wizard },
  ];


  return (
    <HomeContainer>
      <HeaderHome />
      <button onClick={() => leaderboards()} style={myBtnStyle}>Leaderboards</button>
      <CardContainer>
        <LevelCard level={1} img={levelOneImg} handleLevelSelect={handleLevelSelect} characterList={levelOneCharacters} />
        <LevelCard level={"TBD"} />
        <LevelCard level={"TBD"} />
        <LevelCard level={"TBD"} />
      </CardContainer>
    </HomeContainer>
  )
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
  width: '125px',
  justifySelf: 'center',
  marginTop: '25px'
};

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100vw;
`

const CardContainer = styled.div`
  width: auto-fit;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  overflow: auto;
  gap: 75px;
`

export default Home;