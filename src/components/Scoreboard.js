
function Scoreboard({level, score}) {

    //patch state logic based on if the level can be
    //divided by 5 with no remainder
    // if (level % 5 === 0) {
    //     patch logic
    // }

    return (
        <div id="scoreboard">
            <h2>Current Score: {score}</h2>
            <h2>Current Level: {level}</h2>
        </div>
    )
}

export default Scoreboard