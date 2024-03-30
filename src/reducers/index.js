import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

// By combining reducers using combineReducers, we can manage different slices of state in the Redux store separately, making our code more organized and easier to maintain. In this case, the taskReducer is the only reducer, but as the application grows, we can add more reducers to manage different parts of the application state.
const rootReducer = combineReducers({
  taskReducer,
});

export default rootReducer;
