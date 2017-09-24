const axios = require('axios');

export function getUsers() {
  return (
    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
  );
}

export function getUser(login) {
  return (
    axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)

  )
}
