import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContinueMenu({
  currentUser,
  setCurrentUser,
  setUserData,
  userData,
  music,
}) {
  const params = useParams();
  // console.log(currentUser["id"]);
  //console.log(setCurrentUser);

  const navigate = useNavigate();

  function handlePlayClickSound() {
    music.pause();
    navigate("/game");
  }

  function handleResetClick() {
    new Audio("./resetState.wav").play();
  }

  return (
    <div>
      <table className="ContinueMenu">
        <thead>
          <tr>
            <td>
              <button onClick={handlePlayClickSound} className="MenuButton">
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
  );

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
