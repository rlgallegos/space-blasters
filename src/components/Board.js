import { useState, useEffect } from "react";
import React from "react";
import Alien from "./Alien";
import Scoreboard from "./Score";
import { useNavigate } from "react-router-dom";

function Board({ isLoggedIn, currentUser }) {
  const [alienArray, setAlienArray] = useState([]);
  const [xAxis, setxAxis] = useState(50);
  const [alienRects, setAlienRects] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3)
  const [level, setLevel] = useState(1)

  const gameboard = document.getElementsByClassName("gameboard")[0];
  const navigate = useNavigate();

  useEffect(() => {
    if (!lives) {
      alert("Game Over")
      navigate(`/user/${currentUser['id']}`)
    }
  }, [lives])

  useEffect(() => {

    let alienY = [];
    for (let i = 0; i < level * 5; i++) {
      alienY.push(Math.floor(Math.random() * (80 - 20) ) + 10);
    }
    let alienX = [];
    for (let i = 0; i < level * 5; i++) {
      alienX.push(Math.floor(Math.random() * (10 - 65) ) + 65);
    }

    let zip = (alienX, alienY) => {
      return alienX.map((number, i) => [number, alienY[i]])
    }
  
    let coordinates = zip(alienX, alienY)

    let alienImageArray = [
      '/Alien A.png', '/Alien B.png', '/Alien C.png', '/Alien D.png', 'Alien E.png'];
  
    let uniqueId = -1;
    const newArray = coordinates.map(each => {
      uniqueId++
      return <Alien id={uniqueId} key={uniqueId} coordinates={each} alienImageArray={alienImageArray} lives={lives} setLives={setLives} />
    })
    setAlienArray(newArray)
  }, [level])


  useEffect(() => {
    let aliens = document.getElementsByClassName("aliens");

    if (aliens) {
      let alienArray = Array.from(aliens);
      let rectArray = [];
      alienArray.forEach((alien) => {
        rectArray.push(alien.getBoundingClientRect());
        setAlienRects(rectArray);
      });
    }
  }, [alienArray]);

  function createBullet() {
    //element creation
    const newDiv = document.createElement("div");

    gameboard.appendChild(newDiv);
    newDiv.style.backgroundColor = "white";
    newDiv.style.height = "10px";
    newDiv.style.width = "5px";

    //set location
    newDiv.style.position = "absolute";
    newDiv.style.top = `80vh`;
    newDiv.style.left = `${xAxis + 5.5}vw`;

    //begin movement
    sendBullet(newDiv);
  }

  function sendBullet(newDiv) {
    let interval = setInterval(() => {
      newDiv.style.top = newDiv.offsetTop - 1 + "px";

      const bulletRect = newDiv.getBoundingClientRect();

      const gameTop = gameboard.offsetTop;

      //if reaches the top of the gameboard
      if (newDiv.offsetTop <= gameTop) {
        clearInterval(interval);
        gameboard.removeChild(newDiv);
      }

      //if reaches an alien
      for (let i = 0; i < alienRects.length; i++) {
        if ( (alienRects[i].bottom >= bulletRect.top) && ((alienRects[i].left - 10 )<= bulletRect.left) && ((alienRects[i].right + 10) >= bulletRect.right) ) {

          // console.log(i + 1)

          //delete bullet
          clearInterval(interval);
          gameboard.removeChild(newDiv);

          //delete alien
          const updatedArray = alienArray.filter(
            (each) => each.props.id !== alienArray[i].props.id
          );
          setAlienArray(updatedArray);
          
          //update score
          setScore(score + 10);
        }

      }
    }, 0);
  }

  //controls logic
  function handleKeyDown(e) {
    let shipOffsetRight =
      window.innerWidth - e.target.offsetLeft - e.target.offsetWidth;
    let gameboardOffsetRight =
      window.innerWidth - gameboard.offsetLeft - gameboard.offsetWidth;
    switch (e.key) {
      case "a":
        if (e.target.offsetLeft >= gameboard.offsetLeft + 12) {
          setxAxis(xAxis - 2);
        }
        break;
      case "d":
        if (shipOffsetRight >= gameboardOffsetRight + 5) {
          setxAxis(xAxis + 2);
        }
        break;
      case " ":
        console.log("space found");
        createBullet();
        break;
      default:
        return;
    }
  }

  return (
    <>
      <div
        className="ship"
        onKeyDown={handleKeyDown}
        tabIndex="0"
        style={{
          boxSizing: "border-box",
          position: "absolute",
          top: "80vh",
          left: `${xAxis}vw`,
          height: "12vh",
          width: "12vw",
        }}
      ><img id="player-image" src='/player.png'/></div>
      <div className="BoardTitle">
        <p>Current User - {currentUser.username}</p>
        
      </div>
      <div className="gameboard">
      {alienArray}
      {/* <img src="/Planet A.png"
      position="absolute"
      width='150px' />
      <img src="/Planet B.png"
      position="absolute"
      width='100px' />
      <img src="/Planet C.png"
      position="absolute"
      width='200px' /> */}
      </div>
      <Scoreboard level={level} score={score} />
      <h3>Lives: {lives}</h3>
    </>
  );
}
export default Board;
