import React from "react";

function Score({ score, user }) {



//   fetch(` http://localhost:3000/users/`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ score })
// })
// .then(res => res.json())
// .then(data => console.log(data));


  return (
    <tr>
      <td>
        {user} - {score} pts
      </td>
    </tr>
  );
}

export default Score;
