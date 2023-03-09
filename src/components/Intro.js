import Signup from "./Signup";
import Login from "./Login";

function Intro({
  setUserData,
  userData,
  isLoggedIn,
  setIsLoggedIn,
  setCurrentUser,
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
        <h1 className="MainTitle">SPACE BLASTERS</h1>
      </div>
      <div className="starsHome"></div>
      <div className="twinklingHome"> </div>
    </>
  );
}
export default Intro;
