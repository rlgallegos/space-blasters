import "../App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Board from "./Board";
import Intro from "./Intro";
import PageNotFound from "./PageNotFound";
import { useState, useEffect } from "react";
import IDMenu from "./IDMenu";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  // const [music, setMusic] = useState(new Audio("./menuMusic.mp3"));

  const music = new Audio("./menuMusic.mp3");
  const navigate = useNavigate();
  // music.load();

  useEffect(() => {
    fetch("http://localhost:10000/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  function handlePlayMusic() {
    music.play();

    // setMusic(music.pause());
  }

  function handlePauseMusic() {
    music.pause();
    navigate("/game");
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Intro
                setCurrentUser={setCurrentUser}
                userData={userData}
                setUserData={setUserData}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                handlePlayMusic={handlePlayMusic}
                // handlePauseMusic={handlePauseMusic}
              />
            }
          />
          <Route
            path="/user/:id"
            element={
              <IDMenu
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                userData={userData}
                setUserData={setUserData}
                handlePlayMusic={handlePlayMusic}
                handlePauseMusic={handlePauseMusic}
                music={music}
              />
            }
          />
          {/* Finn's Id Page Component goes as the element in the route above */}
          <Route
            path="/game"
            element={
              <Board
                userData={userData}
                setUserData={setUserData}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          {/* Nick's highetst game component will replace element "Board" above */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
