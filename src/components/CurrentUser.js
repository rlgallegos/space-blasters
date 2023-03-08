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
          <tr>{currentUser ? <td>Score:{state["score"]}</td> : <td>error</td>}</tr>
          <tr>
            <td>Email: {email}</td>
          </tr>
          <tr>{currentUser ? <td>Current Level:{state["level"]}</td> : null}</tr>
          <tr>
            <td>Lives Remaining: {state["livesRemaining"]}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default CurrentUser;
