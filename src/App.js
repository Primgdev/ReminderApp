import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [reminder, setReminder] = useState([]);
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    if (input == "") {
      alert("Please put reminder first.");
    } else {
      const array = [...reminder];
      array.push(input);
      setReminder(array);
      setInput("");
      setNotes([...notes, input]);
    }
  }; //function

  const handleDelete = (e, id) => {
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
          value="Save"
        />

        <div className="count" > {reminder.length} Reminder</div>

        {reminder &&
          reminder.map((r, index) => (
            <span key={index + 1}>
              {index + 1}. {r} 
              <input
                type="button"
                value="Done"
                className="primary"
                onClick={(e) => handleDelete(e, index)}
              />
              <br />
            </span>
          ))}
      </div>
    </div>
  );
}

export default App;
