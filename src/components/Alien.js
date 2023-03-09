import React, {useState, useEffect} from "react"

function Alien({ alienImageIndex, lives, setLives, alienImageArray, id, coordinates}) {
    let [nextBullet, setNextBullet] = useState(0)
    console.log(coordinates)

    const alienBoard = document.getElementsByClassName("gameboard")[0]
    const boardRect = alienBoard.getBoundingClientRect()
    let ship = document.getElementsByClassName('ship')[0]

  function createAllienBullet(){
    const alienDiv= document.createElement("div");
    alienBoard.appendChild(alienDiv);
    alienDiv.style.backgroundColor = "red";
    alienDiv.style.width = "5px";
    alienDiv.style.height = "10px";
    alienDiv.style.position = "absolute";
    alienDiv.style.left = `${coordinates[1] + 5.5}vw`;
    alienDiv.style.top = `${coordinates[0] + 5.5}vh`;
    alienDiv.style.margin = '0px'
    sendAllienBullet(alienDiv);
}

    useEffect(() => {
        //set timeout
        let interval = Math.floor(Math.random() * (4000 - 0) ) + 0
        
        setTimeout(() => {
            createAllienBullet()
        }, interval)
        
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
    if (alienRect.bottom >= shipRect.top + 25 && alienRect.left >= shipRect.left + 50 && alienRect.right <= shipRect.right - 50) {
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
            width: "10vw",
            height: "10vh",
            top: `${coordinates[0]}vh`,
            left: `${coordinates[1]}vw`,
            boxSizing: "border-box",
            display: 'inline-block'
        }}
        className='aliens'
        id={id}
        >
            <img src={alienImageArray[alienImageIndex]} alt='Enemy Ship' className="alien-image" />
        </div>
    )
}
export default Alien