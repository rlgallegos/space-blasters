import React from "react";
import Score from "./Score";

function LeaderBoard({ userData }) {
  const orderedScore = userData.sort(
    (a, b) => a.state["score"] - b.state["score"]
  );

  orderedScore.reverse();
  // console.log(orderedScore);
  const completescore = orderedScore.slice(0, 10);

  return (
    <div>
      <table className="LeaderBoardTable">
        <thead>
          <tr>
            <td className="LeaderBoardTitle">LEADERBOARD:Eshwars the best</td>
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
