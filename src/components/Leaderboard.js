import React from "react";
import Score from "./Score";

function LeaderBoard({ userData }) {

  const malleableData = [...userData]
  const orderedScore = malleableData.sort(
    (a, b) => a.state["score"] - b.state["score"]
  );

  orderedScore.reverse();
  const completescore = orderedScore.slice(0, 10);

  return (
    <div>
      <table className="LeaderBoardTable">
        <thead>
          <tr>
            <td className="LeaderBoardTitle">LEADERBOARD:</td>
          </tr>
        </thead>
        <tbody>
          {completescore.map((user) => (
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
