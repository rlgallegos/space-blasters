import React from "react";

function Score({ score, user }) {

  return (
    <tr>
      <td>
        {user} - {score} pts
      </td>
    </tr>
  );
}

export default Score;
