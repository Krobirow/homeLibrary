import { createStore, combineReducers, applyMiddleware} from "redux";
import bookHandlerReducer from "./bookHandlerReducer";
import { reducer as formReducer } from 'redux-form';

import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
	bookHandlerReducer: bookHandlerReducer,
	form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;