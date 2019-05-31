import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import {
  UserService
} from '../../../../api';

import {
  CardUser
} from '../card/card.component'
class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }

    this.userService = new UserService();
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUser()
      .then((response) => {
        console.log('response', response)
        this.setState({ users: response })
      })
  }

  render() {
    const users = this.state.users.map(user => {
      return <CardUser key={user.id} {...user}/>}
    );

    return (
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          {users}
        </View>
      </ScrollView>
    );
  }
}

export {
  UserScreen
}
