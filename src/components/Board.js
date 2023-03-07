import { useState } from "react";
import React from "react";

function Board() {
    const gameboard = document.getElementsByClassName('gameboard')[0]  

    const [xAxis, setxAxis] = useState(50)

    function createBullet() {

        //element creation
        const newDiv = document.createElement('div')
              
        gameboard.appendChild(newDiv)
        newDiv.style.backgroundColor = 'black'
        newDiv.style.height = '15px'
        newDiv.style.width = '15px'

        //set location
        newDiv.style.position = 'absolute'
        newDiv.style.top = `80vh`
        newDiv.style.left = `${xAxis}%`

        //begin movement
        sendBullet(newDiv)
    }

    //while > 10vh

    function sendBullet(newDiv) {
        let interval = setInterval(() => {
            newDiv.style.top = newDiv.offsetTop - 1 + "px";
        }, 0)
        setTimeout(() => {
            clearInterval(interval)
            gameboard.removeChild(newDiv)
        }, 2350)
        }

    function handleKeyDown(e) {
        switch (e.key) {
            case 'a':
                if (xAxis > 22.5){
                    setxAxis(xAxis - 2)
                }
                break;
            case 'd':
                if (xAxis < 75){
                    setxAxis(xAxis + 2)
                }
                break;
            case ' ':
                console.log('space found')
                createBullet()
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
            tabIndex='0'
            style={{
                position: "absolute",
                top: "80vh",
                left: `${xAxis}%`,
                height: "25px",
                width: "25px",
                backgroundColor: "white",
                border: "1px solid black"
            }}
            >     
            </div>
            <div className="gameboard">
            </div>
        </>
        
        
        
  
    )

}
export default Board;