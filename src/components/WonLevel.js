import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const WonLevel = (props) => {

  const score = props.score;
  const submitScore = props.submitScore;
  const level = props.level;

  return (
    <CoverBackground>
      <Container>
        <h3>Level: {level} - Complete!</h3>
        <div>You solved in {score} seconds</div>
        <form onSubmit={(e) => submitScore(e)}>
          <label>
            Submit Score: 
            <input style={{marginLeft: '5px', marginRight: '5px'}} type="text" name="name" placeholder="name"/>
          </label>
      
          <input type="submit" value="Submit" />
        </form>
      </Container>
    </CoverBackground>
  )
}

const CoverBackground = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 100;
  background: rgba(0, 0, 0, .5);
`

const Container = styled.div`
  position: absolute;
  width: auto;
  height: 300px;
  top: 12rem;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export default WonLevel;