import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContinueMenu from "./ContinueMenu";
import CurrentUser from "./CurrentUser";
import LeaderBoard from "./Leaderboard";
import { useNavigate } from "react-router-dom";


function IDMenu({ isLoggedIn, dbUser }) {
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
      {userData?.id ? (
        <CurrentUser userData={userData} dbUser={dbUser} />
      ) : (
        <p>hi</p>
      )}
      <ContinueMenu />
    </div>
  );
}

export default IDMenu;
