import "./App.css";
import { useState, useEffect } from "react";
import Input from "./components/input";
import Reminder from "./components/reminder";
import { deleteReminder, postReminders } from "./service/reminder";
// import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [reminder, setReminder] = useState([]);
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const [fetch, setFetch] = useState(false);

  // const [cookies, setCookie] = useCookies(["reminders"]);
  const url =
    "https://res.cloudinary.com/dvmumi2mb/video/upload/v1712205916/tap-notification-180637_veyyet.mp3";
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    if (playing) {
      setTimeout(() => {
        setPlaying(false);
      }, 500);
    }
  }, [playing]);

  const handleChange = (e) => {
    setInput(e.target.value.trimStart()); //.trimStart() to not use space as a string before any word
  };
  const handleSubmit = async () => {
    const array = [...reminder];
    array.push(input);
    setReminder(array);
    setInput("");
    setNotes([...notes, input]);
    // localStorage.setItem("reminders", JSON.stringify(array));
    setPlaying(true);
    const res = await postReminders(input);
    if (res.insertId) setFetch(true);
  }; //function

  const handleDelete = async (e, id) => {
    e.target.classList.add("strikethrough");
    const res = await deleteReminder(id);
    if (res.affectedRows) setFetch(true);
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
        <Reminder
          reminder={reminder}
          handleDelete={handleDelete}
          fetch={fetch}
          setFetch={setFetch}
        />
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
