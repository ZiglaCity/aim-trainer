import { useState, useEffect } from 'react';
import Target from '../components/Target';
import Score from '../components/Score';

function Game({ difficulty }) {
    const [score, setScore] = useState(0);
    const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
    const [timeLeft, setTimeLeft] = useState(difficulty === "easy" ? 30 : null);
    const [targetsLeft, setTargetsLeft] = useState(difficulty === "easy" ? null : 20);

    const generateNewPosition = () => {
        const x = Math.random() * (window.innerWidth - 50);
        const y = Math.random() * (window.innerHeight - 50);
        setTargetPosition({ x, y });
    };

    function handleHit() {
        setScore(prev => prev + 1);
        generateNewPosition();

        if (difficulty !== "easy") {
            setTargetsLeft(prev => prev - 1);
        }
        if (targetsLeft - 1 === 0) {
            console.log("Game Over - Medium/Hard Mode");
        }
    }

    useEffect(() => {
        if (difficulty === "easy" && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
        if (difficulty === "easy" && timeLeft === 0) {
            console.log("Game Over - Easy Mode");
        }
    }, [timeLeft, difficulty]);

    useEffect(() => {
        if (difficulty !== "easy") {
            const interval = setInterval(() => {
                generateNewPosition();
            }, difficulty === "medium" ? 2000 : 1000);

            return () => clearInterval(interval);
        }
    }, [difficulty ]);

    return (
        <div className="game-container">
            <Score score={score} timeLeft={timeLeft} targetsLeft={targetsLeft} />
            <Target position={targetPosition} onHit={handleHit} />
        </div>
    );
}

export default Game;
