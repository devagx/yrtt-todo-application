import "./Task.css";

function Task({ complete, text, id, deleteTask }) {
  const handleClick = () => {
    deleteTask(id);
  };
  return (
    <li className={`task ${complete ? "task--complete" : ""}`}>
      <p className="task__text">{text}</p>
      {complete === false && <button className="button">Complete</button>}
      <button onClick={handleClick} className="button">
        Delete
      </button>
    </li>
  );
}

export default Task;
