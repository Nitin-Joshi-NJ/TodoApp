// This object defines the initial state of the application, which includes an empty array for storing tasks.
const initialState = {
  tasks: [],
};

// This function takes the current state and an action as arguments and returns the new state based on the action type.
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // This case handles adding a new task to the list. It creates a new state object with the tasks array containing the new task appended to it.
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    // This case handles deleting a task from the list. It creates a new state object with the tasks array filtered to remove the task with the specified taskId.
    case "DELETE_TASK":
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    // This case handles toggling a task. When iterating through map and comparing task.id and action.payload(which contains id) if it is equal then true statement gets executed.
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    // This case returns the current state unchanged if the action type does not match any of the defined cases.
    default:
      return state;
  }
};

export default taskReducer;
