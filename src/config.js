export const API_BASE_URL =
  window.location.href.indexOf('localhost') > -1
    ? 'http://localhost:8080/api'
    : 'https://secret-inlet-35294.herokuapp.com/api';