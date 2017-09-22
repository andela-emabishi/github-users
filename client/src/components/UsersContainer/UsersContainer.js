import React from 'react';
import Display from '../Display/Display';
import defaultUsers from '../../defaultData';
import getUsers from '../../api/server';

export default class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: defaultUsers,
      error: '',
    }
  }

  componentDidMount = () => {
    this.setUsers();
  }

  handleRepoClick = (user) => {
    console.log('A user has been clicked', user)
  }

  setUsers = () => {
    getUsers().then((response) => {
      console.log(response);
      this.setState({
        users: response.data
      })
    }).catch((error) => this.setState({ error }))
  }


  render() {
    console.log('default', this.state.users)
    return (
      <div>
        <Display users={this.state.users} handleRepoClick={this.handleRepoClick}/>
      </div>
    )
  }
}
