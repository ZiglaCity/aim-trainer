import { useState, useEffect } from 'react';
import Target from '../components/Target';
import Score from '../components/Score';

function Game({ difficulty }) {
    const [score, setScore] = useState(0);
    const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
    const [timeLeft, setTimeLeft] = useState(difficulty === "easy" ? 30 : null);
    const [targetsLeft, setTargetsLeft] = useState(difficulty === "easy" ? null : 20);

    const generateNewPosition = () => {
        if (difficulty !== "easy"){
            setTargetsLeft(prev=>prev - 1);
        }
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
            const timeout = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
    
            return () => clearTimeout(timeout); 
        }
    }, [timeLeft, difficulty]);
    

    useEffect(() => {
        if (difficulty !== "easy") {
            if (targetsLeft > 0){
                const timeout = setTimeout(() => {
                    generateNewPosition();
                }, difficulty === "medium" ? 2000 : 1000);

                return () => clearTimeout(timeout);
            }
            else{
                return <P>Game OVer</P>
            }
    
        }
    }, [targetPosition]);
    

    return (
        <div className="game-container">
            <Score score={score} timeLeft={timeLeft} targetsLeft={targetsLeft} />
            <Target position={targetPosition} onHit={handleHit} />
        </div>
    );
}

export default Game;
