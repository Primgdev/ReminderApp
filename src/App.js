import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [reminder, setReminder] = useState([]);

  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    const array = [...reminder];
    array.push(input);
    setReminder(array);
    setInput("");
  }; //function

  const handleDelete = (e, id) => {
    console.log("id", id);
    const copy = [...reminder];
    copy.splice(id, 1);
    setReminder(copy);
  };

  return (
    <div className="App">
      <div className="background">
        <h1>Reminder App</h1>

        <input
          type="text"
          className="input"
          placeholder="Add new reminder"
          value={input}
          onChange={(e) => handleChange(e)}
        ></input>

        <input
          type="button"
          className="save"
          onClick={handleSubmit}
          value="Submit"
        />
      </div>

      <div className="count"> {reminder.length} Reminder</div>

      {reminder &&
        reminder.length &&
        reminder.map((r, index) => (
          <span key={index}>
            {r} , {index}
            <input
              type="button"
              value="Delete"
              className="primary"
              onClick={(e) => handleDelete(e, index)}
            />
            <br />
          </span>
        ))}
    </div>
  );
}

export default App;
