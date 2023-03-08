import React from "react"

function Alien({alienImageArray, id, coordinates}) {
    console.log(alienImageArray)

    return(
        <div
        style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            top: `${coordinates[0]}vh`,
            left: `${coordinates[1]}vh`,
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