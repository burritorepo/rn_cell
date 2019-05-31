import React, { Component } from 'react';
import { Text, View } from 'react-native';

class UserEditScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('fullName', 'User Detail'),
    };
  };

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>UserEditScreen</Text>
      </View>
    );
  }
}

export {
  UserEditScreen
}
