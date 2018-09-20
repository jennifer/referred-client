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

export const GET_COMPANY_DATA_SUCCESS = 'GET_COMPANY_DATA_SUCCESS';
export const getCompanyDataSuccess = data => ({
  type: GET_COMPANY_DATA_SUCCESS,
  data
});

export const GET_COMPANY_DATA_ERROR = 'GET_COMPANY_DATA_ERROR';
export const getCompanyDataError = error => ({
  type: GET_COMPANY_DATA_ERROR,
  error
});

export const getCompanyData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const username = getState().auth.currentUser.username;
  return fetch(`${API_BASE_URL}/companies/${username}`, {
  //return fetch(`${API_BASE_URL}/companies`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json'
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(getCompanyDataSuccess(data)))
    .catch(err => {
      dispatch(getCompanyDataError(err));
    });
};

export const POST_COMPANY_DATA_SUCCESS = 'POST_COMPANY_DATA_SUCCESS';
export const postCompanyDataSuccess = data => ({
  type: POST_COMPANY_DATA_SUCCESS,
  data
});

export const POST_COMPANY_DATA_ERROR = 'POST_COMPANY_DATA_ERROR';
export const postCompanyDataError = error => ({
  type: POST_COMPANY_DATA_ERROR,
  error
});

export const postCompanyData = values => (dispatch, getState) => {
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
    .then(({data}) => dispatch(postCompanyDataSuccess(data)))
    .catch(err => {
      dispatch(postCompanyDataError(err));
    });
};

export const POST_PERSON_DATA_SUCCESS = 'POST_PERSON_DATA_SUCCESS';
export const postPersonDataSuccess = data => ({
  type: POST_PERSON_DATA_SUCCESS,
  data
});

export const POST_PERSON_DATA_ERROR = 'POST_PERSON_DATA_ERROR';
export const postPersonDataError = error => ({
  type: POST_PERSON_DATA_ERROR,
  error
});

export const postPersonData = values => (dispatch, getState) => {
  values.username = getState().auth.currentUser.username;
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/person`, {
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