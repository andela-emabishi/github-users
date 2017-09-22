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
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.props.user.avatar_url} alt="" />
        </div>
        <div className="content">
          <a className="header">{this.props.user.login}</a>
          <a className="header">Followers</a>
          <div className="meta">{this.state.numberOfFollowers}</div>
        </div>
      </div>);
  }
}