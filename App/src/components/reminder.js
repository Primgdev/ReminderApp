import React, { useEffect, useState } from "react";
import {getReminders} from '../service/reminder';

export default function Reminder({ reminder, handleDelete }) {

  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    getReminders().then((datas) => {
      setReminders(datas);
    }); 

  }, [reminder]);

  return (
    <div>
      {reminders && reminders.length && 
        reminders.map((reminder) => (
          <div
            className="task"
            key={reminder.id}
            onClick={(e) => handleDelete(e, reminder.id)}
          >
            <div className="primary" />
            <span
              key={reminder.id}
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
              {reminder.value}

              {/* {index + 1}. {r}  */}

              <br />
            </span>{" "}
          </div>
        ))}
    </div>
  );
}
