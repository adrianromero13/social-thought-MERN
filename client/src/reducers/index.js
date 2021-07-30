import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import reducers
import { ADD_O_THOUGHT } from '../actions/type';

import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer.plugin({
    'addOThought': (state, action) => {
      switch (action.type) {
        case ADD_O_THOUGHT:
          return undefined;
          default: 
          return state;
      }
    }
  }),
});
