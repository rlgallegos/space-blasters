import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContinueMenu from "./ContinueMenu";
import CurrentUser from "./CurrentUser";
import LeaderBoard from "./Leaderboard";

function IDMenu({
  userData,
  setUserData,
  isLoggedIn,
  currentUser,
  setCurrentUser,
  handlePlayMusic,
  music,
  handlePauseMusic,
}) {

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/");
    }
  });

  return (
    <div>
      <div className="starsHome"></div>
      <div className="twinklingHome"> </div>
      <LeaderBoard userData={userData} />

      {isLoggedIn ? (
        <CurrentUser userData={userData} currentUser={currentUser} />
      ) : null}
      <ContinueMenu
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setUserData={setUserData}
        userData={userData}
        music={music}
        handlePauseMusic={handlePauseMusic}
      />
    </div>
  );
}

export default IDMenu;
