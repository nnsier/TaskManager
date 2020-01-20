import React from "react";

const Task = ({ title, description }) => {
  return (
    <div>
      <div>{title}</div>
      <p>{description}</p>
    </div>
  );
};

export default Task;
