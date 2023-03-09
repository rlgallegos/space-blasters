import React, {useState, useEffect} from "react"

function Alien({lives, setLives, alienImageArray, id, coordinates}) {
    let [nextBullet, setNextBullet] = useState(0)

    const alienBoard = document.getElementsByClassName("gameboard")[0]
    const boardRect = alienBoard.getBoundingClientRect()
    let ship = document.getElementsByClassName('ship')[0]

  function createAllienBullet(){
    const alienDiv= document.createElement("div");
    alienBoard.appendChild(alienDiv);
    alienDiv.style.backgroundColor = "red";
    alienDiv.style.width = "10px";
    alienDiv.style.height = "10px";
    alienDiv.style.position = "absolute";
    alienDiv.style.left = `${coordinates[1] + 5.5}vw`;
    alienDiv.style.top = `${coordinates[0] + 5.5}vh`;
    alienDiv.style.margin = '0px'
    sendAllienBullet(alienDiv);
}
    
    useEffect(() => {
        createAllienBullet()
    }, [nextBullet])

    function sendAllienBullet(alienDiv){
    let alienInterval = setInterval(()=> {

    let alienRect = alienDiv.getBoundingClientRect();
    alienDiv.style.top = alienDiv.offsetTop + 1 + "px";

    //if it reaches the bottom
    if (alienRect.bottom > boardRect.bottom){
        setNextBullet(++nextBullet)
        clearInterval(alienInterval);
        alienBoard.removeChild(alienDiv);
    }  
    
    //if it hits the ship
    const shipRect = ship.getBoundingClientRect()
    if (alienRect.bottom >= shipRect.top && alienRect.left >= shipRect.left && alienRect.right <= shipRect.right) {
        console.log(lives)
        setLives((lives) => lives - 1)
        setNextBullet(++nextBullet)
        clearInterval(alienInterval);
        alienBoard.removeChild(alienDiv);
    }

    }, 0 )
}

    return(
        <div
        style={{
            position: "absolute",
            width: "12vw",
            height: "12vh",
            top: `${coordinates[0]}vh`,
            left: `${coordinates[1]}vw`,
            boxSizing: "border-box",
            display: 'inline-block'
        }}
        className='aliens'
        id={id}
        >
            <img src={alienImageArray[id]} className="alien-image" />
        </div>
    )
}
export default Alien