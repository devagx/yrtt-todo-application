import { useState } from "react";
import Header from "./components/Header/Header";
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import React from "react";

//*** MATERIAL UI ***
//import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
//<Button variant="contained">Default</Button>

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Buy cat food",
      completed: false,
      date: "2020-12-01",
      id: uuidv4(),
    },
    { text: "Buy milk", completed: true, date: "2020-12-05", id: uuidv4() },
    {
      text: "Clean kitchen",
      completed: false,
      date: "2020-11-18",
      id: uuidv4(),
    },
    { text: "Eat food", completed: true, date: "2020-09-18", id: uuidv4() },
    {
      text: "Go for a walk",
      completed: false,
      date: "2020-09-18",
      id: uuidv4(),
    },
    {
      text: "Do food shopping",
      completed: false,
      date: "2020-09-18",
      id: uuidv4(),
    },
  ]);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  };

  const addTask = (text) => {
    const newTask = {
      text: text,
      completed: false,
      date: "2021-12-01",
      id: uuidv4(),
    };
    // ...tasks means all the tasks that are currently in the state
    // adds in all the tasks one byone from tasks and then adds the newTask
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completeTasks = tasks.filter((task) => task.completed);

  return (
    <div className="App">
      <Header taskCount={incompleteTasks.length} addTask={addTask} />
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
