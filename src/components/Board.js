import { useState, useEffect } from "react";
import React from "react";
import Alien from "./Alien";

function Board() {
  const [alienArray, setAlienArray] = useState([])
  const [xAxis, setxAxis] = useState(115);


  const gameboard = document.getElementsByClassName("gameboard")[0];
  const level = 1;
  

  useEffect(() => {

    let alienY = [];
    for (let i = 0; i < level * 5; i++) {
      alienY.push(Math.floor(Math.random() * (0 - 75) ) + 75);
    }
    let alienX = [];
    for (let i = 0; i < level * 5; i++) {
      alienX.push(Math.floor(Math.random() * (0 - 50) ) + 50);
    }
  
    let zip = (alienX, alienY) => {
      return alienX.map((number, i) => [number, alienY[i]])
    }
  
    let coordinates = zip(alienX, alienY)
  
    let uniqueId = -1;
    const newArray = coordinates.map(each => {
      uniqueId++
      return <Alien key={uniqueId} coordinates={each} />
    })
    setAlienArray(newArray)
  }, [])



  function createBullet() {
    //element creation
    const newDiv = document.createElement("div");

    gameboard.appendChild(newDiv);
    newDiv.style.backgroundColor = "black";
    newDiv.style.height = "10px";
    newDiv.style.width = "10px";

    //set location
    newDiv.style.position = "absolute";
    newDiv.style.top = `80vh`;
    newDiv.style.left = `${xAxis}vh`;

    //begin movement
    sendBullet(newDiv);
  }

  //while > 10vh

  function sendBullet(newDiv) {
    let interval = setInterval(() => {
      newDiv.style.top = newDiv.offsetTop - 1 + "px";

      const gameTop = gameboard.offsetTop

      if (newDiv.offsetTop <= gameTop) {
        clearInterval(interval);
        gameboard.removeChild(newDiv);
      }
    }, 0);
  }

  //xAxis < 134
  //(xAxis > 60)

  function handleKeyDown(e) {
    let shipOffsetRight = (window.innerWidth - e.target.offsetLeft - e.target.offsetWidth)
    let gameboardOffsetRight = (window.innerWidth - gameboard.offsetLeft - gameboard.offsetWidth)

    console.log(shipOffsetRight)
    switch (e.key) {
      case "a":
        if (e.target.offsetLeft >= (gameboard.offsetLeft + 15)) {
          setxAxis(xAxis - 2);
        }
        break;
      case "d":
        if (shipOffsetRight >= (gameboardOffsetRight + 18)) {
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
          position: "absolute",
          top: "80vh",
          left: `${xAxis}vh`,
          height: "25px",
          width: "25px",
          backgroundColor: "white",
          border: "1px solid black",
          boxSizing: "border-box"
        }}
      >
      </div>
      <div className="gameboard">
      {alienArray}
      </div>
      
    </>
  );
}
export default Board;
