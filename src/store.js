import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';  
import authReducer from './reducers/auth';
import networkReducer from './reducers/network-reducer';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    network: networkReducer
  }),
  composeWithDevTools(
  	applyMiddleware(thunk)
  )
);

export default store;