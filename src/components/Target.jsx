import React from "react";
import aim from '../assets/aim-black.jpg';


function Target({ position, onHit, targetsLeft, difficulty, timeLeft, setIsGameOver }) {
    function gameOver(){
        if (difficulty !== "easy" && targetsLeft > 0){
            onHit();
        }
        else if (difficulty === "easy" && timeLeft > 0){
            onHit();
        }
        else{
            setIsGameOver(true);
        }
    }
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
            onClick={gameOver}
        />
    );
}

export default Target;
