import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import React from "react";
import axios from 'axios';

//*** MATERIAL UI ***
//import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
//<Button variant="contained">Default</Button>


function App() {
  /*
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
  */
  const [tasks, setTasks] = useState([]); //Default state
  const userId = 'b964d3ce-c00b-4af9-939d-39d3f3ce08ed'
  useEffect(() => {
    //A function to get the tasks
    axios
      .get(`https://e19u87cs8e.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/tasks`)
      .then(
        //if the request is successful
        response => setTasks(response.data)
        //response => console.log(response)
      )
      .catch(
        //if the request returns an error
        error => console.log(error))

  },
    //How often should I run this function
    []
  );


  //[] = run once [tasks]  = run every time tasks updated

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.taskId !== id);

    setTasks(updatedTasks);
  };

  const addTask = (text) => {
    const newTask = {
      description: text,
      completed: false
    };
    //Post request, pass it the new task
    //if the post is successful, then add it to the app state
    //if the post is not successful, log out the error

    axios.post(`https://e19u87cs8e.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/tasks`, newTask)
      .then(() => axios.get(`https://e19u87cs8e.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/tasks`))
      .then(response => setTasks(response.data))
      .catch(error => console.log(error))
  }

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
