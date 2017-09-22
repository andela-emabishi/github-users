import React from 'react';
import './card.css';

export default class Display extends React.Component {

  handleRepoClick = user => event => {
    event.preventDefault();
    const login = event.target.value;
    this.props.handleRepoClick(user);
  };
  render() {
    return <div className="ui link cards">
        {this.props.users.map((user, index) => (
          <div className="ui centered raised orange card" key={user.id}>
            <a className="image">
              <img src={user.avatar_url} alt="" />
            </a>
            <div className="content">
              <a className="header" onClick={this.handleRepoClick(user)}>
                {user.login}
              </a>
              <div className="meta">
                <a>{user.email}</a>
                <br />
                <a href={`https://github.com/${user.login}`}>Account</a>
                <a
                  href={`https://github.com/${user.login}/?tab=repositories`}
                >
                  Repositories
                </a>
                <a href={`https://github.com/${user.login}?tab=followers`}>
                  Followers
                </a>
                <br />
                <a>{user.location}</a>
              </div>
            </div>
          </div>
        ))}
      </div>;
  }
}
