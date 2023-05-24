import Signup from "./Signup";
import Login from "./Login";

function Intro({
  setUserData,
  userData,
  setIsLoggedIn,
  setCurrentUser,
  handlePlayMusic,
  music
}) {

  return (
    <>
      <header className="App-header">Good Luck</header>
      <div>
        <Login
          setCurrentUser={setCurrentUser}
          userData={userData}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Signup
          setIsLoggedIn={setIsLoggedIn}
          setUserData={setUserData}
          userData={userData}
        />
        <button onClick={handlePlayMusic} className="playMusicButton">
          {music.paused ? "Play Music" : "Pause Music"}
        </button>
        <h1 className="MainTitle">SPACE BLASTERS</h1>
      </div>
      <div className="starsHome"></div>
      <div className="twinklingHome"> </div>
    </>
  );
}
export default Intro;
