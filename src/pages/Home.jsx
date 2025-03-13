import React, {useState} from 'react';
import StartScreen from '../components/StartScreen';
import Settings from '../components/Settings';
import Game from './Game';
import '../styles/Home.css';
import getGreetings from '../utils/getGreetings';

const greetings = getGreetings();

export default function Home(){         

    const [difficulty, setDifficulty] = useState("easy");
    const [gameStarted, setGameStarted] = useState(false);

    return (
        <div >
            {!gameStarted ? (
            <div className="home-container">
                <h1>{`${greetings} there!`}</h1>
                <h1>Welcome to Zigla's Aim Trainer</h1> 
                <Settings difficulty={difficulty} setDifficulty={setDifficulty} />
                <StartScreen onStart={() => setGameStarted(true)} />
            </div> 
        ):
            <Game difficulty={difficulty} setGameStarted={setGameStarted} />
        }
        </div>
    );

}