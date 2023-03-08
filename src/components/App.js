import "../App.css";
import { Routes, Route } from "react-router-dom";
import Board from "./Board";
import Intro from "./Intro";
import PageNotFound from "./PageNotFound";
import { useState, useEffect } from "react";
import IDMenu from "./IDMenu";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);


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
              />
            }
          />
          <Route
            path="/user/:id"
            element={<IDMenu isLoggedIn={isLoggedIn} currentUser={currentUser} />}
          />
          {/* Finn's Id Page Component goes as the element in the route above */}
          <Route path="/game" element={<Board isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
          {/* Nick's highetst game component will replace element "Board" above */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
