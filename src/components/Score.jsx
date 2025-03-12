export default function Score({ score, timeLeft, targetsLeft, onRestart, onBack, difficulty }) {
    return (
        <div className="score-container">
            <h1>Level: {difficulty}</h1>
            <h1>Score: {score}</h1>
            {difficulty === "easy"  ? 
            <p>⏳ Time: {timeLeft}s</p>
            :
            <p>🎯 Targets Left: {targetsLeft}</p>
        }
            <button onClick={onBack}>Back</button>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
}
