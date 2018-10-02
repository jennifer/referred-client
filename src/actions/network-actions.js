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

// Company actions

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
    method: 'GET',
    headers: {
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

export const PUT_COMPANY_DATA_SUCCESS = 'PUT_COMPANY_DATA_SUCCESS';
export const putCompanyDataSuccess = data => ({
  type: PUT_COMPANY_DATA_SUCCESS,
  data
});

export const PUT_COMPANY_DATA_ERROR = 'PUT_COMPANY_DATA_ERROR';
export const putCompanyDataError = error => ({
  type: PUT_COMPANY_DATA_ERROR,
  error
});

export const putCompanyData = (id, values) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/companies/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => dispatch(putCompanyDataSuccess(data)))
    .catch(err => {
      dispatch(putCompanyDataError(err));
    });
};

export const DELETE_COMPANY_DATA_SUCCESS = 'DELETE_COMPANY_DATA_SUCCESS';
export const deleteCompanyDataSuccess = data => ({
  type: DELETE_COMPANY_DATA_SUCCESS,
  data
});

export const DELETE_COMPANY_DATA_ERROR = 'DELETE_COMPANY_DATA_ERROR';
export const deleteCompanyDataError = error => ({
  type: DELETE_COMPANY_DATA_ERROR,
  error
});

export const deleteCompanyData = (id, data) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/companies/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => dispatch(deleteCompanyDataSuccess(id, data)));
};

// Person actions

export const GET_PERSON_DATA_SUCCESS = 'GET_PERSON_DATA_SUCCESS';
export const getPersonDataSuccess = data => ({
  type: GET_PERSON_DATA_SUCCESS,
  data
});

export const GET_PERSON_DATA_ERROR = 'GET_PERSON_DATA_ERROR';
export const getPersonDataError = error => ({
  type: GET_PERSON_DATA_ERROR,
  error
});

export const getPersonData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const username = getState().auth.currentUser.username;
  return fetch(`${API_BASE_URL}/companies/person/${username}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json'
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(getPersonDataSuccess(data)))
    .catch(err => {
      dispatch(getPersonDataError(err));
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
  const authToken = getState().auth.authToken;
  values.username = getState().auth.currentUser.username;
  if (values.status === 'identified') {
    values.statusIndex = 2;
  };
  if (values.status === 'made contact') {
    values.statusIndex = 3;
  };
  if (values.status === 'got a response') {
    values.statusIndex = 4;
  };
  if (values.status === 'followed up') {
    values.statusIndex = 5;
  };
  if (values.status === 'got a referral!') {
    values.statusIndex = 6;
  };
  return fetch(`${API_BASE_URL}/companies/person`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => dispatch(postPersonDataSuccess(data)))
    .catch(err => {
      dispatch(postPersonDataError(err));
    });
};

export const PUT_PERSON_DATA_SUCCESS = 'PUT_PERSON_DATA_SUCCESS';
export const putPersonDataSuccess = data => ({
  type: PUT_PERSON_DATA_SUCCESS,
  data
});

export const PUT_PERSON_DATA_ERROR = 'PUT_PERSON_DATA_ERROR';
export const putPersonDataError = error => ({
  type: PUT_PERSON_DATA_ERROR,
  error
});

export const putPersonData = (id, values) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  if (values.status === 'identified') {
    values.statusIndex = 2;
  };
  if (values.status === 'made contact') {
    values.statusIndex = 3;
  };
  if (values.status === 'got a response') {
    values.statusIndex = 4;
  };
  if (values.status === 'followed up') {
    values.statusIndex = 5;
  };
  if (values.status === 'got a referral!') {
    values.statusIndex = 6;
  };
  return fetch(`${API_BASE_URL}/companies/person/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => dispatch(putPersonDataSuccess(data)))
    .catch(err => {
      dispatch(putPersonDataError(err));
    });
};

export const DELETE_PERSON_DATA_SUCCESS = 'DELETE_PERSON_DATA_SUCCESS';
export const deletePersonDataSuccess = data => ({
  type: DELETE_PERSON_DATA_SUCCESS,
  data
});

export const DELETE_PERSON_DATA_ERROR = 'DELETE_PERSON_DATA_ERROR';
export const deletePersonDataError = error => ({
  type: DELETE_PERSON_DATA_ERROR,
  error
});

export const deletePersonData = (id, data) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/companies/person/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => dispatch(deletePersonDataSuccess(id, data)));
};