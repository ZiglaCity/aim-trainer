function StartScreen({ onStart }) {
    return (
        // later add greetings to the welcome message
      <div>
        <h1>Welcome to Aim Trainer</h1> 
        <button onClick={onStart}>Start Game</button>
      </div>
    );
  }
  
  export default StartScreen;
  