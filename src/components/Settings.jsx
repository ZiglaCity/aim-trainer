function Settings({ difficulty, setDifficulty }) {
    return (
      <div className="settings-container">
        <label className="settings-label">Select Difficulty:</label>
        <select 
          className="settings-select" 
          value={difficulty} 
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    );
}

export default Settings;
