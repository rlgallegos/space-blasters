import React from "react";

function ContinueMenu() {
  return (
    <table className="ContinueMenu">
      <thead>
        <tr>
          <td>
            <button className="ContinueMenuButton">Continue</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="ContinueMenuButton">Restart</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="ContinueMenuButton">Delete</button>
          </td>
        </tr>
      </thead>
    </table>
  );
}

function handleContinueClick() {}

export default ContinueMenu;
