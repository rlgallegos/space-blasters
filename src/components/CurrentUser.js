import React from "react";

function CurrentUser({ userData }) {
  const { username, email, state } = userData;
  console.log(state);
  //   const score = state.score;
  return (
    <div className="CurrentUserData">
      <h2 className="CurrentUserTitle">Current User: {username}</h2>
      <table className="CurrentLoginMenu">
        <thead>
          <tr>{userData ? <td>Score:{state["score"]}</td> : <td>error</td>}</tr>
          <tr>
            <td>Email: {email}</td>
          </tr>
          <tr>{userData ? <td>Current Level:{state["level"]}</td> : null}</tr>
          <tr>
            <td>Lives Remaining: {state["livesRemaining"]}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default CurrentUser;
