import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContinueMenu from "./ContinueMenu";
import CurrentUser from "./CurrentUser";
import LeaderBoard from "./Leaderboard";

function IDMenu({
  userData,
  isLoggedIn,
  currentUser,
  setCurrentUser,
  handlePlayMusic,
  music
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
        <CurrentUser currentUser={currentUser} />
      ) : null}
      <ContinueMenu
        setCurrentUser={setCurrentUser}
      />
        <button onClick={handlePlayMusic} className="play-music-button-general">
            {music.paused ? "Play Music" : "Pause Music"}
        </button>
    </div>

  );
}

export default IDMenu;
