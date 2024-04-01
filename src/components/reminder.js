import React from "react";

export default function Reminder({ reminder, handleDelete }) {
  return (
    <div>
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
  );
}
