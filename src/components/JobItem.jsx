import React from "react";

const JobItem = ({ id, name, completed, onComplete, onRemove }) => {
  return (
    <div className="job-item">
      {/* <p>ID: {id}</p> */}
      <p>დავალება: {name}</p>

      <button onClick={() => onComplete(id)}>
        {completed ? "დაბრუნება" : "დასრულება"}
      </button>
      {completed && <button onClick={() => onRemove(id)}>წაშლა</button>}
    </div>
  );
};

export default JobItem;
