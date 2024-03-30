//This action creator function takes a task object as an argument and returns an action object with the type ADD_TASK and the task object as the payload.
export const addTask = (newTask) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: newTask.id,
      text: newTask.text,
    },
  };
};

// This action creator function takes a taskId as an argument and returns an action object with the type DELETE_TASK and the taskId as the payload.
export const deleteTask = (taskId) => {
  return {
    type: "DELETE_TASK",
    payload: taskId,
  };
};

// This action creator function takes a taskId as an argument and returns an action object with the type TOGGLE_TASK and the taskId as the payload.
export const toggleTask = (taskId) => {
  return {
    type: "TOGGLE_TASK",
    payload: taskId,
  };
};
