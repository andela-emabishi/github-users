const axios = require('axios');

export default function getUsers() {
  return (
    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
  );
}
