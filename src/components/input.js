import React from "react";

export default function Input({ input, handleChange, detectKey }) {
  return (
    <div>
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
  );
}
