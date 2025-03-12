export default function Score({ score, timeLeft, targetsLeft, onRestart, onBack }) {
    return (
        <div className="score-container">
            <h1>Score: {score}</h1>
            <p>⏳ Time: {timeLeft}s</p>
            <p>🎯 Targets Left: {targetsLeft}</p>
            <button onClick={onBack}>Back</button>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
}
