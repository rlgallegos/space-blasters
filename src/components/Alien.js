import React from "react"

function Alien({id, coordinates}) {
    console.log(coordinates)

const alienBoard = document.getElementsByClassName("gameboard")[0]
const boardRect = alienBoard.getBoundingClientRect()

  function createAllienBullet(){
    const alienDiv= document.createElement("div");
    alienBoard.appendChild(alienDiv);
    alienDiv.style.backgroundColor = "red";
    alienDiv.style.width = "10px";
    alienDiv.style.height = "10px";
    alienDiv.style.position = "absolute";
    alienDiv.style.left = `${coordinates[1]}vh`;
    alienDiv.style.top = `${coordinates[0]}vh`;
    alienDiv.style.margin = '0px'
    sendAllienBullet(alienDiv);
} 

setInterval(createAllienBullet, 3000);

  function sendAllienBullet(alienDiv){
    let alienInterval = setInterval(()=> {
    let alienRect = alienDiv.getBoundingClientRect();
    alienDiv.style.top = alienDiv.offsetTop + 1 + "px";


    if(alienRect.bottom > boardRect.bottom){
        clearInterval(alienInterval);
        alienBoard.removeChild(alienDiv);
    }  
    }, 0 )
}

    return(
        <div
        style={{
            position: "absolute",
            backgroundColor: 'black',
            width: "25px",
            height: "25px",
            top: `${coordinates[0]}vh`,
            left: `${coordinates[1]}vh`,
        }}
        className='aliens'
        id={id}
        >

        </div>
    )
}
export default Alien