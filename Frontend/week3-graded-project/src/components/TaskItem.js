
import React, { useState } from 'react';
import axios from 'axios';
 
const TaskItem = ({ task }) => {
  const [stage, setStage] = useState(task.stage);
 
  const updateStage = async (newStage) => {
    try {
      const response = await axios.put(`http://localhost:5000/milestones/${task.id}`, {
        "milestone": task.milestone,
      "project": task.project,
      "stage": newStage,
      "completionDate": task.completionDate,
      "TL": task.TL,
      "AssignedTo": task.AssignedTo
      });
 
      if (response.status === 200) {
        setStage(newStage);
        alert("Status updated");
        console.log(response);
      } else {
        alert("Status not updated");
      }
    } catch (error) {
      alert("Something went wrong with the API");
      console.error(error);
    }
  };
 
  return (
    <div className="task-card">
      <h4>{task.milestone}</h4>
      <p>Assigned to: {task.AssignedTo}</p>
      <p>Stage: {stage}</p>
      <button onClick={() => updateStage('To Do')}>To Do</button>
      <button onClick={() => updateStage('In Progress')}>In Progress</button>
      <button onClick={() => updateStage('Done')}>Done</button>
    </div>
  );
};
 
export default TaskItem;
 
 