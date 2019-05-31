import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from 'react-native';

class LoginLoadingScreen extends Component {
  constructor() {
    super();
    this.getToken();
  }

  getToken = async () => {
    //AsyncStorage.setItem('userToken', '123')
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Login');
  };

  render() {
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
        <StatusBar barStyle="default" backgroundColor="black" />
      </View>
    );
  }
}

export {
  LoginLoadingScreen
}