function Settings({ difficulty, setDifficulty }) {
    return (
      <div>
        <label>Select Difficulty:</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    );
}
  
export default Settings;
  