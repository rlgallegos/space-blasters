import React from "react";
import { useNavigate } from "react-router-dom";

function ContinueMenu() {
  const navigate = useNavigate();
  return (
    <div>
      <table className="ContinueMenu">
        <thead>
          <tr>
            <td>
              <button onClick={() => navigate("/game")} className="MenuButton">
                Continue
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={handleRestartClick} className="MenuButton">
                Restart
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={handleDeleteClick} className="MenuButton">
                Delete
              </button>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

// function handleContinueClick() {
//   console.log("Continue");
// }

function handleRestartClick() {
  console.log("Restart");
}

function handleDeleteClick() {
  console.log("Delete");
}

export default ContinueMenu;
