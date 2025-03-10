export default function Score({ score, timeLeft, targetsLeft }) {
    return (
        <div className="score-container">
            <h1>Score: {score}</h1>
            <p>⏳ Time: {timeLeft}s</p>
            <p>🎯 Targets Left: {targetsLeft}</p>
            <button>Back</button>
            <button>Restart</button>
        </div>
    );
}
