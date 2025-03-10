import React from "react";
import aim from '../assets/aim-black.jpg';


function gameOver(){
    // 
}
function Target({ position, onHit, targetsLeft }) {
    return (
        <img
            src={aim}
            alt="Target"
            className="target"
            style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: "100px",
            height: "100px",
            cursor: "pointer",
            }}
            onClick={targetsLeft > 0 ? onHit : gameOver}
        />
    );
}

export default Target;
