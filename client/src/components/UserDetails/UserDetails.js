import React from 'react';
import axios from 'axios';

import './card.css';

export default class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfFollowers: ''
    }
  }

  componentDidMount = () => {
    this.fetchFollowers()
  }

  fetchFollowers() {
    axios.get(`https://api.github.com/users/${this.props.login}/followers`)
    .then((response) => {
    const followers = response.data
    const numberOfFollowers = followers.length
    this.setState({ numberOfFollowers })}
  )
  }

  render() {
    console.log('followers', this.state.numberOfFollowers)
    return (
      <div className="ui centered raised orange card">
        <a className="image">
          <img src={this.props.user.avatar_url} alt="" />
        </a>
        <div className="content">
          <a className="header">{this.props.user.login}</a>
          <div className="meta">
            <br />
            <a href={`https://github.com/${this.props.user.login}`}>Account</a>
            <a href={`https://github.com/${this.props.user.login}/?tab=repositories`}>
              Repositories
            </a>
            <a href={`https://github.com/${this.props.user.login}?tab=followers`}>
              Followers
            </a>
            <a>{this.state.numberOfFollowers}</a>
            <br />
          </div>
        </div>
      </div>
    );
  }
}