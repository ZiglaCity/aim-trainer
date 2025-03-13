import { useState, useEffect } from 'react';
import Target from '../components/Target';
import Score from '../components/Score';
import '../styles/game.css';
import ParticlesBackground from '../components/ParticlesBackground';

const backgroundColors = {
    easy: "#220353",  
    medium: "#160436",
    hard: "#1e1e1e" 
};
  
function Game({ difficulty, setGameStarted }) {
    const [score, setScore] = useState(0);
    const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
    const [timeLeft, setTimeLeft] = useState(difficulty === "easy" ? 30 : null);
    const [targetsLeft, setTargetsLeft] = useState(difficulty === "easy" ? null : 20);
    const [isGameOver, setIsGameOver] = useState(false);
    
    const generateNewPosition = () => {
        if (difficulty !== "easy" && targetsLeft > 0) {
            setTargetsLeft(prev => prev - 1);
        }
        const buffer = 100; // to prevent the target from going off screen

        const x = buffer + Math.random() * (window.innerWidth - 2 * buffer);
        const y = buffer + Math.random() * (window.innerHeight - 2 * buffer);
        setTargetPosition({ x, y });
    };

    function handleHit() {
        setScore(prev => prev + 1);
        generateNewPosition();
    }

    function handleRestart() {
        setScore(0);
        setIsGameOver(false);
        generateNewPosition();
        setTimeLeft(difficulty === "easy" ? 30 : null);
        setTargetsLeft(difficulty === "easy" ? null : 20); 
    }

    function handleBack(){
        setGameStarted(false);
        setGameStarted(false);
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
        }
    }, [targetPosition]);
    

    return (
        <div className="game-container"
            style={{ backgroundColor: backgroundColors[difficulty] }}>

            <aside className="scoreboard">
                <Score score={score} timeLeft={timeLeft} targetsLeft={targetsLeft} onRestart={handleRestart} onBack={handleBack} difficulty={difficulty} isGameOver={isGameOver} />
            </aside>

            <div className="game-area">
                <Target position={targetPosition} onHit={handleHit} targetsLeft={targetsLeft} difficulty={difficulty} timeLeft={timeLeft} setIsGameOver={setIsGameOver} setTargetPosition={setTargetPosition}/>
            </div>
            <ParticlesBackground />
        </div>

    );
}

export default Game;