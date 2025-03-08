import React, {useState} from 'react';
import StartScreen from '../components/StartScreen';
import Settings from '../components/Settings';
import Game from './Game';

export default function Home(){         

    const [difficulty, setDifficulty] = useState("easy");
    const [gameStarted, setGameStarted] = useState(false);

    return (
        <div>
            {!gameStarted ? (
            <>
                <StartScreen onStart={() => setGameStarted(true)} />
                <Settings difficulty={difficulty} setDifficulty={setDifficulty} />
            </> 
        ):
            <Game difficulty={difficulty} />
        }
        </div>
    );

}