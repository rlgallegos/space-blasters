import React from "react";
import Score from "./Score";

function LeaderBoard({ userData }) {
  return (
    <div>
      <table className="LeaderBoardTable">
        <thead>
          <tr>
            <td className="LeaderBoardTitle">LEADERBOARD:</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <Score
              key={user.id}
              score={user.state["score"]}
              user={user.username}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
