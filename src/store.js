import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './reducers/auth';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadAuthToken } from "./local-storage";
import referredReducer from './reducers/referred';
import { reducer as formReducer } from 'redux-form';
import { setAuthToken, refreshAuthToken } from "../src/actions/auth";
import thunk from 'redux-thunk';  

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    referred: referredReducer
  }),
  composeWithDevTools(
  	applyMiddleware(thunk)
  )
);

// Hydrate the authToken from localStorage if it exists
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;