import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="heading">To Do!!</h1>
        <div className="add-task__actions">
          <label htmlFor="add-task-input" className="visuallyhidden">Add new to do task</label>
          <input id="add-task-input" className="add-task__input-field"></input>
          <button className="button">Add</button>
        </div>
        <p className="outstanding-tasks">You have 3 tasks to complete</p>
      </header>
      <main className="all-tasks">
        <section className="incomplete-tasks">
          <h2 className="heading">Tasks to do:</h2>
          <ul className="task-list">
            <li className="task">
              <p className="task__text">This is a task that needs to be done</p>
              <button className="button">Complete</button>
              <button className="button">Delete</button>
            </li>
            <li className="task">
              <p className="task__text">This is a task that needs to be done</p>
              <button className="button">Complete</button>
              <button className="button">Delete</button>
            </li>
            <li className="task">
              <p className="task__text">This is a task that needs to be done</p>
              <button className="button">Complete</button>
              <button className="button">Delete</button>
            </li>
          </ul>
        </section>
        <section className="complete-tasks">
          <h2 className="heading">Complete tasks:</h2>
          <ul className="task-list">
            <li className="task task--complete">
              <p className="task__text">This is a task that needs to be done</p>
              <button className="button">Delete</button>
            </li>
            <li className="task task--complete">
              <p className="task__text">This is a task that needs to be done</p>
              <button className="button">Delete</button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
