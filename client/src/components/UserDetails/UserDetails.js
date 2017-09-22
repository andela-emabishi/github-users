import React from 'react';
import axios from 'axios';

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
    <div>
      <img src={this.props.user.avatar_url} alt=""/>
      {this.props.user.login}
      {this.props.user.id}
      {this.state.numberOfFollowers}
    </div>
  )
  }
}