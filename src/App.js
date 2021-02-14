import AddTask from './components/AddTask/AddTask'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="heading">To Do!!</h1>
        <AddTask />
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
