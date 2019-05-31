import React from 'react';
import {
  createStackNavigator
} from 'react-navigation';

import {
  UserScreen,
  UserDetailScreen,
  UserEditScreen,
  UserAddScreen
} from './components';

import HeaderButton from '../../components/header/header.component';

const UserRoute = createStackNavigator(
  {
    User: {
      screen: UserScreen
    },
    UserDetail: {
      screen: UserDetailScreen
    },
    UserEdit: {
      screen: UserEditScreen
    },
    UserAdd: {
      screen: UserAddScreen
    }
  },
  {
    initialRouteName: 'User',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: 'white',
      title: 'Usuarios',
      headerRight: <HeaderButton />
    },
    headerBackTitleVisible: false
  }
);

export {
  UserRoute
}