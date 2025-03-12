import React, {useState} from 'react';
import StartScreen from '../components/StartScreen';
import Settings from '../components/Settings';
import Game from './Game';
import '../styles/Home.css';

export default function Home(){         

    const [difficulty, setDifficulty] = useState("easy");
    const [gameStarted, setGameStarted] = useState(false);

    return (
        <div >
            {!gameStarted ? (
            <div className="home-container">
                <h1>Welcome to Aim Trainer</h1> 
                <Settings difficulty={difficulty} setDifficulty={setDifficulty} />
                <StartScreen onStart={() => setGameStarted(true)} />
            </div> 
        ):
            <Game difficulty={difficulty} setGameStarted={setGameStarted} />
        }
        </div>
    );

}