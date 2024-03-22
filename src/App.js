import "./App.css";
import { useState } from "react";

function App() {
const [reminder, setReminder] = useState([]);
const handleSubmit =() => {
  const array = [...reminder];
  array.push(input);
  setReminder(array);
  setInput("");

 
};//function 
console.log(reminder);
const [input, setInput] = useState("");
const handleChange =(e) => {
  setInput(e.target.value)
};

  return (
    <div className="App">
      <div className="background">
        <h1>Reminder App</h1>
        <div className="reminderCount">0 Reminders</div>

        <input
          type="text"
          className="input"
          placeholder="Add new reminder"
          onChange={(e)=> handleChange(e)}
        ></input>

        <button type="button" className="done" onClick={handleSubmit}>Done</button>
      </div>
      {
        reminder && reminder.map((r) => <span>{r}<br /></span>)
      }
    </div>
  );
}

export default App;
