import React, { useState, useEffect } from "react";
import db from "../utils/firebase";
import HeaderHome from "./HeaderHome";
import { collection, query, getDocs, where, addDoc, updateDoc, doc, getDoc } from "@firebase/firestore";
import styled from "styled-components";



const Leaderboards = (props) => {

  const [data, setData] = useState(null);

  const navigate = props.navigate;

  useEffect(() => {
    getLeaderboards();
  }, []);

  async function getLeaderboards() {
    const leaderboards = collection(db, "leaderboards");
    const q = query(
      leaderboards,
    )
    let data = [];
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
      console.log(doc.data());
      data.push(doc.data());
    })
    setData(data.sort((a, b) => parseFloat(a.time) - parseFloat(b.time)));
  }

  const headHome = () => {
    navigate("/");
  }
  

  return (
    <LeaderboardsContainer>
      <HeaderHome />
      <button onClick={() => headHome()} style={myBtnStyle}>Home</button>
      <DataSection>
        {!data 
          ? 
          <Loading>Loading...</Loading>
          :
          <div>
            <h3 style={{textAlign: 'center', color: 'red'}}>Leaderboards</h3>
            <Row>
              <Level style={{fontWeight: 'bold', padding: '15px'}}>Level</Level>
              <Name style={{fontWeight: 'bold', padding: '15px'}}>Name</Name>
              <Time style={{fontWeight: 'bold', padding: '15px'}}>Time (s)</Time>
            </Row>
            {data.map((val, index) => {
              return(
                <Row key={index}>
                  <Level style={{ padding: '3px' }}>{val.level}</Level>
                  <Name style={{ padding: '3px' }}>{val.name}</Name>
                  <Time style={{ padding: '3px' }}>{val.time}</Time>
                </Row>
              )
            })}
          </div>
        }
      </DataSection>
    </LeaderboardsContainer>
  )
}

const LeaderboardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100vw;
  gap: 25px;
`


const DataSection = styled.div`
  justify-self: center;
  width: 60vw;
  height: auto;
  min-height: 200px;
  max-height: 75vh;
  overflow: auto;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 25px;
  border-radius: 10px;
`

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 55px;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`

const Level = styled.div`
  grid-column: 1 / 2;
`

const Name = styled.div`
  grid-column: 2 / 3;
`

const Time = styled.div`
  grid-column: 3 / 4;
`

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
};

export default Leaderboards;