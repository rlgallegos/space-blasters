function Scoreboard({ currentUser, level, score, lives }) {
  // patch state logic based on if the level can be
  // divided by 5 with no remainder

  // if (level % 5 === 0) {
  //     fetch(`http://localhost:3000/users/${}`)
  // }

  return (
    <div id="scoreboard">
      <h2>Current User - {currentUser.username}</h2>
      <h2>Current Score: {score}</h2>
      <h2>Current Level: {level}</h2>
      <h2>Lives: {lives}</h2>
    </div>
  );
}

export default Scoreboard;
