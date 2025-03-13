import "../styles/gameover.css";

export default function Score({ score, timeLeft, targetsLeft, onRestart, onBack, difficulty, isGameOver }) {

    const accuracy = difficulty === "easy" 
    ? (score / (30 - timeLeft)).toFixed(2)
    : ((score / 20) * 100).toFixed(2);

    return (
        // mage sure the div is centered when gameover
        <div className={`score-container ${isGameOver ? "game-over" : ""}`}>
            {isGameOver && <h1>🎮 Game Over!</h1>}  
            <h2>Level: {difficulty}</h2>
            <h2>Score: {score}</h2>
            {difficulty === "easy"  ? 
            <p>⏳ Time: {timeLeft}s</p>
            :
            <p>🎯 Targets Left: {targetsLeft}</p>
            }
            <p>🔥 Accuracy: {accuracy} {difficulty === "easy" ? "hits/sec" : "%"}</p>
            <button onClick={onBack}>Back</button>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
}
