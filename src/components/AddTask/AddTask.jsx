import { useState } from "react";
import "./AddTask.css";

function AddTask({ addTask }) {
  //update react state (text)
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    addTask(text);
    setText("");
  };

  return (
    <div className="add-task__actions">
      <label htmlFor="add-task-input" className="visuallyhidden">
        Add new to do task
      </label>
      <input
        value={text} //update html element state
        onChange={handleChange}
        id="add-task-input"
        className="add-task__input-field"
      ></input>
      <button onClick={handleClick} className="button add-task__button">
        Add
      </button>
    </div>
  );
}

export default AddTask;
