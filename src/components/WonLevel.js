import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const WonLevel = (props) => {

  const score = props.score;
  const submitScore = props.submitScore;
  const level = props.level;

  return (
    <Container>
      <div>Level: {level}</div>
      <div>You got {score}</div>
      <form onSubmit={(e) => submitScore(e)}>
        <label>
          Submit Score: 
          <input type="text" name="name" placeholder="name"/>
        </label>
        
        <input type="submit" value="Submit" />
      </form>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  width: 500px;
  height: 300px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid red;
  color: white;
  background-color: black;
`

export default WonLevel;