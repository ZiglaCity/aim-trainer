export default function Score({ score, timeLeft, targetsLeft, onRestart, onBack, difficulty }) {

    const accuracy = difficulty === "easy" 
    ? (score / (30 - timeLeft)).toFixed(2)
    : ((score / 20) * 100).toFixed(2);

    return (
        <div className="score-container">
            <h1>Level: {difficulty}</h1>
            <h1>Score: {score}</h1>
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
