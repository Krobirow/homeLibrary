import { applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import bookHandlerReducer from './bookHandlerReducer';

const store = configureStore({
  reducer: {
    bookHandlerReducer: bookHandlerReducer,
    form: formReducer,
    ...applyMiddleware(thunkMiddleware)
  },
})

export default store