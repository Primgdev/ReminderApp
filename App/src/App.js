import "./App.css";
import { useState, useEffect } from "react";
import Input from "./components/input";
import Reminder from "./components/reminder";
import { postReminders } from "./service/reminder";
// import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [reminder, setReminder] = useState([]);
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  // const [cookies, setCookie] = useCookies(["reminders"]);

  const handleChange = (e) => {
    setInput(e.target.value.trimStart()); //.trimStart() to not use space as a string before any word
  };
  const handleSubmit = () => {
    const array = [...reminder];
    array.push(input);
    setReminder(array);
    setInput("");
    setNotes([...notes, input]);
    // localStorage.setItem("reminders", JSON.stringify(array));
    postReminders(input);
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
    const remindersFromLocalStorage = JSON.parse(
      localStorage.getItem("reminders")
    );
    remindersFromLocalStorage && setReminder([...remindersFromLocalStorage]);
  }, []);

  return (
    <div className="App">
      <div className="filters">
        <h3>Reminder</h3>
        <Reminder reminder={reminder} handleDelete={handleDelete} />
      </div>
      <div className="background">
        <Input
          input={input}
          handleChange={handleChange}
          detectKey={detectKey}
        />
      </div>
    </div>
  );
}

export default App;
