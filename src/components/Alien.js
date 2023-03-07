import React from "react"

function Alien({coordinates}) {



    return(
        <div
        style={{
            position: "relative",
            backgroundColor: 'black',
            width: "25px",
            height: "25px",
            top: `${coordinates[0]}vh`,
            left: `${coordinates[1]}%`
        }}
        >

        </div>
    )
}
export default Alien