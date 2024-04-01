import "./App.css";
import { useState , useEffect} from "react";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [reminder, setReminder] = useState([]);
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const [cookies, setCookie] = useCookies(["reminders"]);

  const handleChange = (e) => {
    setInput(e.target.value.trimStart()); //.trimStart() to not use space as a string before any word
  };
  const handleSubmit = () => {
    const array = [...reminder];
    array.push(input);
    setReminder(array);
    setInput("");
    setNotes([...notes, input]);
    setCookie("reminders", array, { path: "/" });
  }; //function

  const handleDelete = (e, id) => {
    console.log(e);
    e.target.classList.add("strikethrough");
    // const copy = [...reminder];
    // copy.splice(id, 1);
    // setReminder(copy);
  };

  const detectKey = (e) => {
    if (e.key === "Enter" && input) {
      handleSubmit();
    }
  };


  useEffect(() => {
    const remindersFromCookies = cookies.reminders;
    remindersFromCookies && setReminder([...remindersFromCookies]);
  },[cookies])

  return (
    <div className="App">
      <div className="filters">
        <h3>Reminder</h3>

        {reminder &&
          reminder.map((r, index) => (
            <div
              className="task"
              key={index}
              onClick={(e) => handleDelete(e, index)}
            >
              <div className="primary" />
              <span
                key={index}
                style={{
                  fontSize: "18px",
                  padding: "10px",
                  alignContent: "center",
                  width: "100%",
                  backgroundColor: "#2f2d36",
                  borderRadius: "10px",
                  marginRight: "20px",
                  color: "white",
                  opacity: "0.6",
                  height: "auto",
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
