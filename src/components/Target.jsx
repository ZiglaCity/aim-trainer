import React from "react";
import easyTarget from '../assets/aim-black.jpg';
import mediumTarget from '../assets/aim-blue.jpg';
import hardTarget from '../assets/aim-white.jpg';


const targetImages = {
    easy: easyTarget,
    medium: mediumTarget,
    hard: hardTarget
};
  

function Target({ position, onHit, targetsLeft, difficulty, timeLeft, setIsGameOver, setTargetPosition }) {
    function gameOver(){
        if (difficulty !== "easy" && targetsLeft > 0){
            onHit();
        }
        else if (difficulty === "easy" && timeLeft > 0){
            onHit();
        }
        else{
            setTargetPosition({ x: window.innerWidth / 2 + 200, y: window.innerHeight / 2 + 150 }); // Move target away from gameover screen
            setIsGameOver(true);
        }
    }
    return (
        <img
            src={targetImages[difficulty]}
            alt="Target"
            className="target"
            style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: "120px",
            height: "120px",
            cursor: "pointer",
            }}
            onClick={gameOver}
        />
    );
}

export default Target;
