import React from 'react';

export default class Display extends React.Component {
  handleRepoClick = (event) => {
    event.preventDefault();
    const login = event.target.value;
    this.props.handleRepoClick(login);
  }
  render() {
    console.log('display', this.props.users)
    return (
      <ul>
        {
          this.props.users.map((user, index) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt=""/>
              <h4>{user.login}</h4>
              <a>Repositories</a>
              <button value={user.login} onClick={this.handleRepoClick}>CLICK HERE</button>
            </li>
          ))
        }
      </ul>
    )
  }
}
