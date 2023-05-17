import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContinueMenu({
  currentUser,
  setCurrentUser,
  setUserData,
  userData,
  music,
}) {
  const params = useParams();
  const [chosenPlayer, setChosenPlayer] = useState("player.png");
  const navigate = useNavigate();

  function handleChoosePlayer(e) {
    setChosenPlayer(e.target.name);
  }

  function handlePlayClickSound() {
    music.pause();
    navigate("/game");
  }

  function handleResetClick() {
    new Audio("./resetState.wav").play();
  }

  return (
    <>
      <div id="two-player-container">
        <div onClick={handleChoosePlayer} className="player-container">
          <img name="player1" className="player-image" src="/player.png"></img>
        </div>
        <div onClick={handleChoosePlayer} className="player-container">
          <img name="player2" className="player-image" src="/player2.png"></img>
        </div>
      </div>

      <div id="continue-table-div">
        <table className="ContinueMenu">
          <thead>
            <tr>
              <td>
                <button onClick={handleContinueClick} className="MenuButton">
                  Continue
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={handleRestartClick} className="MenuButton">
                  Reset State
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={handleDeleteClick} className="MenuButton">
                  Delete User
                </button>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );

  function handleContinueClick() {
    navigate("/game", { state: { player: chosenPlayer } });
  }

  function handleRestartClick() {
    handleResetClick();
    const restartedUser = {
      state: {
        score: 0,
        livesRemaining: 10,
        level: 0,
      },
    };
    fetch(`http://localhost:3000/users/${params["id"]}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restartedUser),
    })
      .then((res) => res.json())
      .then((restartedUser) => setCurrentUser(restartedUser));
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/users/${params["id"]}`, {
      method: "DELETE",
    })
      .then(() => {
        // const newArray = userData.filter((user) => currentUser.id !== user.id);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }
}
export default ContinueMenu;
