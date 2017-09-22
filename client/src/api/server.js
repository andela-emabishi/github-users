const axios = require('axios');

export default function getUsers() {
  return (
    axios.get('https://api.github.com/users')
  );
}

// getUsers().then((response) => console.log(response))
// TODO profile picture, stars, username
