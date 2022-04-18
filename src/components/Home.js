import React from "react";
import styled from "styled-components";
import LevelCard from "./LevelCard";
import waldo from '../assets/waldo.png';
import odlaw from '../assets/odlaw.png';
import wizard from '../assets/wizard.png';
import levelOneImg from '../assets/wheres-waldo-img.jpeg';


const Home = (props) => {

  const navigate = props.navigate;
  const handleLevelSelect = props.handleLevelSelect;

  const levelOneCharacters = [
    { name: 'waldo', img: waldo },
    { name: 'odlaw', img: odlaw },
    { name: 'wizard', img: wizard },
  ];


  return (
    <HomeContainer>
      <CardContainer>
        <LevelCard level={1} img={levelOneImg} handleLevelSelect={handleLevelSelect} characterList={levelOneCharacters} />
        <LevelCard level={2} />
        <LevelCard level={3} />
        <LevelCard level={4} />
      </CardContainer>
    </HomeContainer>
  )
}

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