import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    SHOW_MODAL,
    HIDE_MODAL
} from '../actions/network-actions';

const initialState = {
    data: '',
    error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null
    });
  } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }  
  if (action.type === SHOW_MODAL) {
    return Object.assign({}, state, { showModal: true });
  }
  if (action.type === HIDE_MODAL) {
    return Object.assign({}, state, { showModal: false });
  }
  return state;
}
