import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

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

  moveDetail(id, name, lastname) {
    this.props.navigation.navigate('UserDetail', {
      id,
      fullName: `${name} ${lastname}`
    })
  }

  render() {
    const users = this.state.users.map(user => {
      return <CardUser key={user.id} {...user} 
      onMove={this.moveDetail.bind(this)}
      onGetUsers={this.getUsers}/>}
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
