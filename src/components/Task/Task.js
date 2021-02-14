import './Task.css';

function Task() {
    return (
        <li className="task">
            <p className="task__text">This is a task that needs to be done</p>
            <button className="button">Complete</button>
            <button className="button">Delete</button>
        </li>
    );
}

export default Task;