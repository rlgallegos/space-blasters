import Signup from "./Signup";
import Login from "./Login";

function Intro({
  setUserData,
  userData,
  isLoggedIn,
  setIsLoggedIn,
  setCurrentUser,
  handlePlayMusic,
  handlePauseMusic,
}) {
  if (isLoggedIn) {
    //go to "/user/:id"
  }

  return (
    <>
      <header className="App-header">Good Luck</header>
      <div>
        <Login
          setCurrentUser={setCurrentUser}
          userData={userData}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Signup
          setIsLoggedIn={setIsLoggedIn}
          setUserData={setUserData}
          userData={userData}
        />
        <button onClick={handlePlayMusic} className="playMusicButton">
          Play Music
        </button>
        <h1 className="MainTitle">SPACE BLASTERS</h1>
      </div>
      <div className="starsHome"></div>
      <div className="twinklingHome"> </div>
    </>
  );
}
export default Intro;
