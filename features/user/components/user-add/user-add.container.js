import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import {
  box
} from '../../../../assets/styles';

import {
  FormUser
} from '../';
class UserAddScreen extends Component {
  static navigationOptions = {
    title: 'Agregar Usuarios',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      git: '',
      email: ''
    }
  }

  handleInputChange(stateName, value) {
    console.log('value', value)
    this.setState({
      [stateName]: value
    })
    console.log('this.state', this.state)
  }

  handleSubmit() {
    console.log('enviar!!', this.state)
  }

  render() {
    return (
      <View style={Object.assign({}, box.padding, { flex: 1, paddingTop:20 })}>
        <FormUser
          onChange={this.handleInputChange.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}
          {...this.state}
        />
      </View>
    );
  }
}

export {
  UserAddScreen
}
