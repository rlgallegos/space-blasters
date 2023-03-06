import React from "react";
import Score from "./Score";

function LeaderBoard({ userData }) {
  return (
    <div>
      <table className="LeaderBoardTable">
        <thead>
          <tr>
            <td>Leaderboard:</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {/* {userData?.map((user) => (
                <Score userData={userData} score={user.state["score"]} />
              ))} */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
