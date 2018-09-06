import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
  type: FETCH_PROTECTED_DATA_SUCCESS,
  data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
  type: FETCH_PROTECTED_DATA_ERROR,
  error
});

export const FETCH_PROTECTED_DATA = 'FETCH_PROTECTED_DATA';
export const fetchProtectedData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/protected`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

export const POST_COMPANY_SUCCESS = "POST_COMPANY_SUCCESS";
export const postCompanySuccess = data => ({
  type: POST_COMPANY_SUCCESS,
  data
});

export const POST_COMPANY_ERROR = "POST_COMPANY_ERROR";
export const postCompanyError = error => ({
  type: POST_COMPANY_ERROR,
  error
});

export const postCompany = values => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  values.username = getState().auth.currentUser.username;
  return fetch(`${API_BASE_URL}/companies`, {
    method: 'POST',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

export const ADD_PERSON = 'ADD_PERSON';
export const addPerson = values => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/people`, {
    method: 'POST',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

export const OPEN_MODAL = "OPEN_MODAL";
export const openModal = () => ({
  type: OPEN_MODAL
});

export const CLOSE_MODAL = "CLOSE_MODAL";
export const closeModal = () => ({
  type: CLOSE_MODAL
});