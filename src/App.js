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
    const array = [...reminder];
    array.push(input);
    setReminder(array);
    setInput("");
    setNotes([...notes, input]);
  }; //function

  const handleDelete = (e, id) => {
    const copy = [...reminder];
    copy.splice(id, 1);
    setReminder(copy);
  };

  const detectKey = (e) => {
    if (e.key === "Enter" && input) {
      handleSubmit();
      
    }
  };

  return (
    <div className="App">
      <div className="filters">
        <h3>Reminder</h3>

        {reminder &&
          reminder.map((r, index) => (
            <div className="task" key={index}>
              <input
                type="radio"
                value="Done"
                className="primary"
                onClick={(e) => handleDelete(e, index)}
        
                style={{ width: "8%" }}
              />
              <span
                key={index}
                style={{
                  fontSize: "15px",
                  padding: "10px",
                  alignContent: "center",
                  width: "100%",
                  backgroundColor: "#2f2d36",
                  borderRadius: "10px",
                  marginRight: "20px",
                  color: "white",
                  opacity: "0.6",
                }}
              >
                {r}

                {/* {index + 1}. {r}  */}

                <br />
              </span>{" "}
            </div>
          ))}
      </div>

      <div className="background">
        <h3> Add Reminder</h3>
        <input
          type="text"
          className="data"
          placeholder="Enter reminder"
          value={input}
          onChange={(e) => handleChange(e)}
          onKeyUp={detectKey}
        ></input>

        {/* <input
          type="button"
          className="save"
          onClick={handleSubmit}
          value="Save"
        /> */}

        {/* <div className="count"> {reminder.length} Reminder</div> */}
        {/* if else statement  */}
      </div>
    </div>
  );
}

export default App;
