export default function Score({ score, timeLeft, targetsLeft, onRestart }) {
    return (
        <div className="score-container">
            <h1>Score: {score}</h1>
            <p>⏳ Time: {timeLeft}s</p>
            <p>🎯 Targets Left: {targetsLeft}</p>
            <button>Back</button>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
}
