import React from "react";
import styled from "styled-components";
import waldoLeft from "../assets/waldo_left.png";
import waldoRight from "../assets/waldo_right.png";


const HeaderHome = () => {


  return (
    <Container>
      <ImgContainer>
        <img alt='waldo left' src={waldoLeft} style={myImgStyle} />
      </ImgContainer>
      <Title>Where's Waldo?</Title>
      <ImgContainer>
        <img alt='waldo right' src={waldoRight} style={myImgStyle} />
      </ImgContainer>
    </Container>
  )
}

const Title = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40%;
  font-weight: bold;
  height: 65px;
  padding: 0 10px;
  background-color: red;
  color: white;
`

const Container = styled.div`
  height: auto;
  background-color: white;
  padding: 10px;
  border-bottom: 5px solid red;
  border-top: 5px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`



const ImgContainer = styled.div`
  width: 80px;
  height: 65px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 40%;
  border: 1px solid rgb(255,0,0, 0.4);
`
const myImgStyle = {
  width: '100%',
  height: '100%',
  borderRadius: "40%",
}


export default HeaderHome;
