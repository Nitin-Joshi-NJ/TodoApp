import { legacy_createStore as createStore} from 'redux'
import rootReducer from './reducers/index';

// This code sets up the Redux store for the application, combining reducers using a customized createStore function and exporting the created store for use throughout the application.
const store = createStore(rootReducer)

export default store;