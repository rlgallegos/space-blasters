function Scoreboard({ currentUser, level, score, lives }) {

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
