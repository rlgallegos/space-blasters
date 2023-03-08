import { useState, useEffect } from "react";
import React from "react";
import Alien from "./Alien";

function Board() {
  const [alienArray, setAlienArray] = useState([])
  const [xAxis, setxAxis] = useState(115);
  const [alienRects, setAlienRects] = useState([])


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
      return <Alien id={uniqueId} key={uniqueId} coordinates={each} />
    })
    setAlienArray(newArray)
  }, [])

  useEffect(() => {
    //gather an array of Alien Divs
    //each has a class of aliens to gather
    //each has a unique ID to identify
    let aliens = document.getElementsByClassName('aliens')

    if(aliens) {
      let alienArray = Array.from(aliens)
      let rectArray = []
      alienArray.forEach(alien => {
        rectArray.push(alien.getBoundingClientRect())
      setAlienRects(rectArray)
      })
    }


  }, [alienArray])

  //CURRENTLY HOLDS ALL RECTANGLES FOR ALIENS CURRENTLY IN EXISTANCE
  // console.log(alienRects)


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


  function sendBullet(newDiv) {
    let interval = setInterval(() => {
      newDiv.style.top = newDiv.offsetTop - 1 + "px";

      const bulletRect = newDiv.getBoundingClientRect()

      const gameTop = gameboard.offsetTop

      //if reaches the top of the gameboard
      if (newDiv.offsetTop <= gameTop) {
        clearInterval(interval);
        gameboard.removeChild(newDiv);
      }

      //if reaches an alien
      for (let i = 0; i < alienRects.length; i++) {
        if ( (alienRects[i].bottom >= bulletRect.top) && (alienRects[i].left <= bulletRect.left) && (alienRects[i].right >= bulletRect.right) ) {
          console.log('collision marked')
          // console.log(i + 1)

          //delete bullet
          clearInterval(interval);
          gameboard.removeChild(newDiv);

          //delete alien
          const updatedArray = alienArray.filter(each => each.props.id !== alienArray[i].props.id)
          setAlienArray(updatedArray)
        }
      }
    }, 0);
  }

  function handleKeyDown(e) {
    let shipOffsetRight = (window.innerWidth - e.target.offsetLeft - e.target.offsetWidth)
    let gameboardOffsetRight = (window.innerWidth - gameboard.offsetLeft - gameboard.offsetWidth)
    switch (e.key) {
      case "a":
        if (e.target.offsetLeft >= (gameboard.offsetLeft + 12)) {
          setxAxis(xAxis - 2);
        }
        break;
      case "d":
        if (shipOffsetRight >= (gameboardOffsetRight + 5)) {
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
          left: `${xAxis}vh`,
          height: "25px",
          width: "25px",
          border: "1px solid black",
          boxSizing: "border-box"
        }}
      >
        <img id="player-image"/>
      </div>
      <div className="gameboard">
      {alienArray}
      </div>
      
    </>
  );
}
export default Board;
