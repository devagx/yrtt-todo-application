import { useState } from "react";
import Header from "./components/Header/Header";
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";
import React from "react";

//*** MATERIAL UI ***
//import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
//<Button variant="contained">Default</Button>

function App() {
  const [tasks, setTasks] = useState([
    { text: "Buy cat food", completed: false, date: "2020-12-01", id: "001" },
    { text: "Buy milk", completed: true, date: "2020-12-05", id: "002" },
    { text: "Clean kitchen", completed: false, date: "2020-11-18", id: "003" },
    { text: "Eat food", completed: true, date: "2020-09-18", id: "004" },
    { text: "Go for a walk", completed: false, date: "2020-09-18", id: "005" },
    {
      text: "Do food shopping",
      completed: false,
      date: "2020-09-18",
      id: "006",
    },
  ]);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  };

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completeTasks = tasks.filter((task) => task.completed);

  return (
    <div className="App">
      <Header taskCount={incompleteTasks.length} />
      <main className="all-tasks">
        <TaskList
          deleteTask={deleteTask}
          tasks={incompleteTasks}
          status="incomplete"
        />
        <TaskList
          deleteTask={deleteTask}
          tasks={completeTasks}
          status="complete"
        />
      </main>
    </div>
  );
}

export default App;
