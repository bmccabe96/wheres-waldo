

const Home = (props) => {

  const navigate = props.navigate;

  const nav = () => {
    navigate("/gamelevel");
  }

  return (
    <div>
      <div>HOME SCREEN TEMPORARY</div>
      <button onClick={nav}>Game</button>
    </div>
  )
}

export default Home;