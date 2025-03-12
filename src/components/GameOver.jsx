import React from "react";

export default function GameOver({ score, accuracy, onRestart, onBack, difficulty }) {
    return (
        <div className="game-over-overlay">
        <div className="game-over-box">
            <h1>🎯 Game Over</h1>
            <p>Final Score: {score}</p>
            <p>🔥 Accuracy: {accuracy} {difficulty === "easy" ? "hits/sec" : "%"}</p>
            <button onClick={onRestart}>🔄 Restart</button>
            <button onClick={onBack}>🏠 Home</button>
        </div>
        </div>
    );
}
