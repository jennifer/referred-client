import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    GET_COMPANY_DATA_SUCCESS,
    GET_COMPANY_DATA_ERROR,
    POST_COMPANY_DATA_SUCCESS,
    POST_COMPANY_DATA_ERROR,
    PUT_COMPANY_DATA_SUCCESS,
    PUT_COMPANY_DATA_ERROR,
    DELETE_COMPANY_DATA_SUCCESS,
    DELETE_COMPANY_DATA_ERROR,
    GET_PERSON_DATA_SUCCESS,
    GET_PERSON_DATA_ERROR,
    POST_PERSON_DATA_SUCCESS,
    POST_PERSON_DATA_ERROR,
    PUT_PERSON_DATA_SUCCESS,
    PUT_PERSON_DATA_ERROR,
    DELETE_PERSON_DATA_SUCCESS,
    DELETE_PERSON_DATA_ERROR
} from '../actions/referred';

const initialState = {
    data: '',
    error: null,
    companies: [],
    people: []
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

  // Company reducers

  if (action.type === GET_COMPANY_DATA_SUCCESS) {
    return Object.assign({}, state, {
      companies: action.data,
      error: null
    });
  }

  if (action.type === GET_COMPANY_DATA_ERROR) {
    return Object.assign({}, state, { 
      error: action.error 
    });
  }

  if (action.type === POST_COMPANY_DATA_SUCCESS) {
    return Object.assign({}, state, {
      companies: [...state.companies, action.data],
      error: null
    });
  }

  if (action.type === POST_COMPANY_DATA_ERROR) {
    return Object.assign({}, state, { 
      error: action.error 
    });
  }

  if (action.type === PUT_COMPANY_DATA_SUCCESS) {
    return Object.assign({}, state, {
      companies: [...state.companies, action.data],
      error: null
    });
  }

  if (action.type === PUT_COMPANY_DATA_ERROR) {
    return Object.assign({}, state, { 
      error: action.error 
    });
  }

  if (action.type === DELETE_COMPANY_DATA_SUCCESS) {
    return Object.assign({}, state, {
      companies: [...state.companies, action.data],
      error: null
    });
  }

  if (action.type === DELETE_COMPANY_DATA_ERROR) {
    return Object.assign({}, state, { 
      error: action.error 
    });
  }

  // Person reducers

  if (action.type === GET_PERSON_DATA_SUCCESS) {
    return Object.assign({}, state, {
      people: action.data,
      error: null
    });
  }

  if (action.type === GET_PERSON_DATA_ERROR) {
    return Object.assign({}, state, { 
      error: action.error 
    });
  }

  if (action.type === POST_PERSON_DATA_SUCCESS) {
    return Object.assign({}, state, {
      people: [...state.people, action.data],
      error: null
    });
  }

  if (action.type === POST_PERSON_DATA_ERROR) {
    return Object.assign({}, state, { 
      error: action.error 
    });
  }

  if (action.type === PUT_PERSON_DATA_SUCCESS) {
    return Object.assign({}, state, {
      people: [...state.people, action.data],
      error: null
    });
  }

  if (action.type === PUT_PERSON_DATA_ERROR) {
    return Object.assign({}, state, { 
      error: action.error 
    });
  }

  if (action.type === DELETE_PERSON_DATA_SUCCESS) {
    return Object.assign({}, state, {
      people: [...state.people, action.data],
      error: null
    });
  }

  if (action.type === DELETE_PERSON_DATA_ERROR) {
    return Object.assign({}, state, { 
      error: action.error 
    });
  }

  return state;
}
