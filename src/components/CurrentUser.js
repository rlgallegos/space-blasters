import React from "react";

function CurrentUser({ currentUser }) {
  const { username, email, state } = currentUser;

  console.log(username, email, state);
  console.log(state);
  //   const score = state.score;
  return (
    <div className="CurrentUserData">
      <h2 className="CurrentUserTitle">Current Player: {username}</h2>
      <table className="CurrentLoginMenu">
        <thead>
          <tr>
            {currentUser.state["score"] ? (
              <td>Score:{state["score"]}</td>
            ) : (
              <td>Score: 0</td>
            )}
          </tr>
          <tr>
            <td>Email: {email}</td>
          </tr>
          <tr>
            {currentUser.state["level"] ? (
              <td>Current Level:{state["level"]}</td>
            ) : (
              <td>Current Level: 1</td>
            )}
          </tr>
          <tr>
            <td>
              {currentUser.state["livesRemaining"] ? (
                <td>Lives Remaining: {state["livesRemaining"]}</td>
              ) : (
                <td>Lives Remaining: 3</td>
              )}
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default CurrentUser;
