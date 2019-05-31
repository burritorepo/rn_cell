import React from 'react';
import { Text, AsyncStorage } from 'react-native';
import {
  withNavigation
} from 'react-navigation';
import { NavigationService } from '../../api';
class HeaderButton extends React.Component {
  constructor(props) {
    super(props)
    console.log('propiedades', props)
  }
  render() {
    return <Text style={{ paddingRight: 10, color: 'green' }} onPress={() => this.props.navigation.navigate('UserAdd')}>Add</Text>
  }
}

export default withNavigation(HeaderButton);

export class HeaderLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = async () => {
    await AsyncStorage.removeItem('userToken');
    NavigationService.navigate('LoginLoading');
  }

  render() {
    return (<Text onPress={this.logout} style={{ fontSize: 14, color: 'green', paddingLeft: 10 }}>Logout</Text>)
  }
}
