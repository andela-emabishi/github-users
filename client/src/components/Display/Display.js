import React from 'react';

export default class Display extends React.Component {
  handleRepoClick = (event) => {
    event.preventDefault();
    // console.log('event', event.target)
    console.log('>>>>>>.')
    this.props.handleRepoClick(event.target.value);
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
              <a href={`https://github.com/${user.login}`} onClick={this.handleRepoClick}>Repositories</a>
            </li>
          ))
        }
      </ul>
    )
  }
}
