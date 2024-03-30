import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/index";

export default function TaskInput() {
  // This hook is used to define the state variable taskText, which represents the value of the input field for adding tasks.
  const [taskText, setTaskText] = useState("");

  // This hook is used to get the dispatch function from the Redux store, which is used to dispatch actions.
  const dispatch = useDispatch();

  const handleAddTask = () => {
    // This statement checks if the value given in taskText is not an empty string
    if (taskText.trim() !== "") {
      // This line creates a new task object with a unique identifier generated using Date.now() as the id, and the value of taskText as the text.
      const newTask = { id: Date.now(), text: taskText };
      // This line dispatches an action to add the new task to the Redux store
      dispatch(addTask(newTask));
      // This line resets the value of taskInput to an empty string, clearing the input field after the task has been added.
      setTaskText("");
    }
  };

  const handleKeyPress = (e) => {
    // if pressed key is 'ENTER' then only handleAddTask will get executed
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="task_input">
      <h2>Todo App</h2>
      <input
        type="text"
        placeholder="Add New Task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button type="text" className="btn btn-success" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
}
