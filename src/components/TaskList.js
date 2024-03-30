import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../actions";

export default function TaskList() {
  // This hook is used to select data from redux store
  const tasks = useSelector((state) => state.taskReducer.tasks);
  // used to dispatch actions
  const dispatch = useDispatch();

  // Dispatches a toggleTask action when a checkbox associated with a task is toggled.
  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };
  // Dispatches a deleteTask action when the delete button associated with a task is clicked.
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="task_list">
          <div className="left">
           <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" ,padding:'10px',fontSize: '20px'}}
          >
            {task.text}
          </span>
          </div>
          <div className="right">
          <button className='btn btn-danger' onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        </div>
      ))}
      </>
  );
}
