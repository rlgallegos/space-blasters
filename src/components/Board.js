import { useState, useEffect } from "react";
import React from "react";
import Alien from "./Alien";

function Board() {
  const [alienArray, setAlienArray] = useState([])
  const gameboard = document.getElementsByClassName("gameboard")[0];
  const level = 1;

  useEffect(() => {

    let alienY = [];
    for (let i = 0; i < level * 5; i++) {
      alienY.push(Math.floor(Math.random() * (90 - 15) ) + 15);
    }
    let alienX = [];
    for (let i = 0; i < level * 5; i++) {
      alienX.push(Math.floor(Math.random() * (90 - 15) ) + 15);
    }
  
    let zip = (alienX, alienY) => {
      return alienX.map((number, i) => [number, alienY[i]])
    }
  
    let coordinates = zip(alienX, alienY)
  
    const newArray = coordinates.map(each => {
      return <Alien coordinates={each} />
    })
    setAlienArray(newArray)
  }, [])

  const [xAxis, setxAxis] = useState(100);

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

  function handleKeyDown(e) {
    console.log(e.target)
    switch (e.key) {
      case "a":
        if (xAxis > 60) {
          setxAxis(xAxis - 2);
        }
        break;
      case "d":
        if (xAxis < 134) {
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
          position: "relative",
          top: "80vh",
          left: `${xAxis}vh`,
          height: "25px",
          width: "25px",
          backgroundColor: "white",
          border: "1px solid black",
          userSelect: true

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
