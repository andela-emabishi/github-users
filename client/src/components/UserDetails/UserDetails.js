import React from 'react';
import axios from 'axios';

import '../shared/card.css';

import { getUser } from '../../api/server';

export default class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount = () => {
    this.fetchUser()
  }

  fetchUser() {
    const login = this.props.user.login
    getUser(login)
    .then((response) => {
      const user = response.data;
      this.setState({
        user
      })
    })
  }

  render() {
    return <div className="ui centered raised orange card">
        <a className="image">
          <img src={this.props.user.avatar_url} alt="" />
        </a>
        <div className="content">
          <a className="header">{this.props.user.login}</a>
          <div className="meta">
            <br />
            <span>Name</span>
            <br />
            <span>{this.state.user.name}</span>
            <br />
            <a href={`${this.state.user.blog}`}>Blog</a>
            <br />
            <span>Location</span>
            <br />
            <span>{this.state.user.location}</span>
            <br />
            <span>Followers</span>
            <span>{this.state.user.followers}</span>
            <br />
            <span>Following</span>
            <span>{this.state.user.following}</span>
            <br />
            <span>Public Repos</span>
            <span>{this.state.user.public_repos}</span>
            <br />
          </div>
        </div>
      </div>;
  }
}