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
      <h3>Where's Waldo?</h3>
      <ImgContainer>
        <img alt='waldo right' src={waldoRight} style={myImgStyle} />
      </ImgContainer>
    </Container>
  )
}


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
`
const myImgStyle = {
  width: '100%',
  height: '100%'
}


export default HeaderHome;
