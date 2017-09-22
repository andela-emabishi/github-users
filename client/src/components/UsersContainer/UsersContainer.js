import React from "react";
import Display from "../Display/Display";
import defaultUsers from "../../defaultData";
import getUsers from "../../api/server";
import UserDetails from '../UserDetails/UserDetails'

import { withRouter, Switch, Route } from "react-router-dom";

export class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: defaultUsers,
      error: "",
      login: "",
    };
  }

  componentDidMount = () => {
    this.setUsers();
  };

  handleRepoClick = user => {
    this.setState({ user });
    this.props.history.push('/' + user.login);
  };

  setUsers = () => {
    getUsers()
      .then(response => {
        console.log(response);
        this.setState({
          users: response.data
        });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Display
              users={this.state.users}
              handleRepoClick={this.handleRepoClick}
            />
          )}
        />
        <Route
          path="/:login"
          render={() => (<UserDetails user={this.state.user} />)}
        />
      </Switch>
    );
  }
}

export default withRouter(UsersContainer);
