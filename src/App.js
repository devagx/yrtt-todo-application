import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="header">
        <h1 class="heading">To Do!!</h1>
        <div class="add-task__actions">
          <label for="add-task-input" class="visuallyhidden">Add new to do task</label>
          <input id="add-task-input" class="add-task__input-field"></input>
          <button class="button">Add</button>
        </div>
        <p class="outstanding-tasks">You have 3 tasks to complete</p>
      </header>
      <main class="all-tasks">
        <section class="incomplete-tasks">
          <h2 class="heading">Tasks to do:</h2>
          <ul class="task-list">
            <li class="task">
              <p class="task__text">This is a task that needs to be done</p>
              <button class="button">Complete</button>
              <button class="button">Delete</button>
            </li>
            <li class="task">
              <p class="task__text">This is a task that needs to be done</p>
              <button class="button">Complete</button>
              <button class="button">Delete</button>
            </li>
            <li class="task">
              <p class="task__text">This is a task that needs to be done</p>
              <button class="button">Complete</button>
              <button class="button">Delete</button>
            </li>
          </ul>
        </section>
        <section class="complete-tasks">
          <h2 class="heading">Complete tasks:</h2>
          <ul class="task-list">
            <li class="task task--complete">
              <p class="task__text">This is a task that needs to be done</p>
              <button class="button">Delete</button>
            </li>
            <li class="task task--complete">
              <p class="task__text">This is a task that needs to be done</p>
              <button class="button">Delete</button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
