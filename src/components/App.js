import "../App.css";
import { Routes, Route } from "react-router-dom";
import Board from "./Board";
import Intro from "./Intro";
import PageNotFound from "./PageNotFound";
import { useState, useEffect } from "react";
import IDMenu from "./IDMenu";

const music = new Audio("./menuMusic.mp3");

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        console.log(data)
      });
  }, []);

  function handlePlayMusic() {
    console.log(isPlaying)
    if (!isPlaying){
        setIsPlaying(isPlaying => !isPlaying)
        music.play()
    } else {
        setIsPlaying(isPlaying => !isPlaying)
        music.pause()
    }
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
                setIsLoggedIn={setIsLoggedIn}
                handlePlayMusic={handlePlayMusic}
                music={music}
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
                handlePlayMusic={handlePlayMusic}
                music={music}
              />
            }
          />
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
    
  );
}

export default App;
