import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

import taskService from "../../services/taskService";
import TaskList from "../../components/TaskList/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    if (!tasks) {
      getTasks();
    }
  });

  const getTasks = async () => {
    let res = await taskService.getAll();
    console.log(res);
    setTasks(res);
    console.log(res);
  };

  const renderTasks = task => {
    return (
      <li key={task._id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </li>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>TaskManager</h1>
      </header>
      <div>
        <Button variant="contained" color="primary">
          Clicky
        </Button>
        <ul>
          {tasks && tasks.length > 0 ? (
            <TaskList tasks={tasks} />
          ) : (
            <p>No tasks found. Set a Goal!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
