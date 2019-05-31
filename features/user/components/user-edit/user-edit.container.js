import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import {
  box
} from '../../../../assets/styles';

import {
  FormUser
} from '../';

import {
  UserService
} from '../../../../api';

class UserEditScreen extends Component {
  static navigationOptions = {
    title: 'Agregar Usuarios',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      git: '',
      email: '',
      avatar: ''
    }

    this.userService = new UserService();
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const { navigation } = this.props;

    this.userService.getUser(navigation.getParam('id'))
    .then((response) => {
      console.log('response', response)
      this.setState(Object.assign({}, this.state, response))
      // this.setState({
      //   user : response
      // })
    })
  }

  handleInputChange(stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  handleSubmit() {
    const { navigation } = this.props;
    this.userService.saveUser(
      navigation.getParam('id'),
      this.state
    )
  }

  render() {
    return (
      <ScrollView>
        <View style={Object.assign({}, box.padding, { flex: 1, paddingTop: 20 })}>
          <FormUser
            onChange={this.handleInputChange.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
            {...this.state}
          />
        </View>
      </ScrollView>
    );
  }
}

export {
  UserEditScreen
}
