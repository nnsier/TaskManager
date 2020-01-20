import React from "react";

import Task from "../Task/Task";

const TaskList = ({ tasks }) => {
  console.log(tasks);
  return (
    <div>
      {tasks.map((task, index) => (
        <ul>
          <Task title={task.title} description={task.description} />
          {/* Base Case */}
          {task.children.length > 0 && <TaskList tasks={task.children} />}
        </ul>
      ))}
    </div>
  );
};

export default TaskList;
