import {BASE_URL, HEADERS} from '../config';
import {handleResponse} from '../helpers';

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({username, password})
  };
  
  return fetch(`${BASE_URL}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }
      
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };
  
  return fetch(`${BASE_URL}/users/register`, requestOptions).then(handleResponse);
}

export const userService = {
  login,
  logout,
  register,
};
