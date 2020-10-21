import React, { Component } from 'react';
import { fetchUser } from './service';

class User extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    fetchUser(this.props.id).then(user => this.setState({ user }));
  }

  render() {
    return this.state.user === null ? (
      <p>Loading</p>
    ) : (
      <div style={{ border: '1px solid #000', padding: '1px 30px' }}>
        <h4>{this.state.user.name}</h4>
        <p>URL: {this.state.user.website}</p>
      </div>
    );
  }
}

export default User;
