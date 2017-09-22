import React from 'react';

export default class Display extends React.Component {
  handleRepoClick = (user) => event => {
    event.preventDefault();
    const login = event.target.value;
    this.props.handleRepoClick(user);
  }
  render() {
    return (
      <ul>
        {
          this.props.users.map((user, index) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt=""/>
              <h4>{user.login}</h4>
              <a>Repositories</a>
              <button onClick={this.handleRepoClick(user)}>CLICK HERE</button>
            </li>
          ))
        }
      </ul>
    )
  }
}
