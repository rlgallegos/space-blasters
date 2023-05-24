import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContinueMenu({
  setCurrentUser,
}) {
  const params = useParams();
  const [chosenPlayer, setChosenPlayer] = useState("player.png");
  const navigate = useNavigate();

  function handleChoosePlayer(e) {
    setChosenPlayer(e.target.name);
  }

  function handleResetClick() {
    new Audio("./resetState.wav").play();
  }
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
    fetch(`/api/users/${params["id"]}`, {
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
    fetch(`/api/users/${params["id"]}`, {
        method: "DELETE",
    })
    .then(() => {
        navigate("/");
        window.location.reload();
    })
        .catch((error) => {
        console.error("Error deleting user:", error);
    });
  }

  return (
    <>
      <div id="two-player-container">
        <div onClick={handleChoosePlayer} className="player-container">
          <img name="player1" className="player-image" src="/player.png" alt="Ship Choice A"></img>
        </div>
        <div onClick={handleChoosePlayer} className="player-container">
          <img name="player2" className="player-image" src="/player2.png" alt="Ship Choice B"></img>
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
            <div className="controls-container">
                <h2 className="controls-title">Controls</h2>
                <h4 className="controls-text">Move Left: "a"</h4>
                <h4 className="controls-text">Move Right: "d"</h4>
                <h4 className="controls-text">Fire Laser: [spacebar]</h4>
            </div>
        </table>

      </div>
    </>
  );
}
export default ContinueMenu;
