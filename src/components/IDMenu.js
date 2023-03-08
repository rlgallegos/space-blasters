import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContinueMenu from "./ContinueMenu";
import CurrentUser from "./CurrentUser";
import LeaderBoard from "./Leaderboard";

function IDMenu({ isLoggedIn, currentUser, setCurrentUser }) {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  if (isLoggedIn === false) {
    navigate("/");
  }

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div>
      <LeaderBoard key={userData.id} userData={userData} />

      {isLoggedIn ? (
        <CurrentUser userData={userData} currentUser={currentUser} />
      ) : null}
      <ContinueMenu
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setUserData={setUserData}
        userData={userData}
      />
    </div>
  );
}

export default IDMenu;
