import { createSwitchNavigator } from 'react-navigation';

import {
  LoginScreen,
  LoginLoadingScreen,
  UserRoute
} from '../features';

import {
  Camara
} from '../features/camara/camara'

const rootRoutes = createSwitchNavigator(
  {
    LoginLoading: LoginLoadingScreen,
    Login: LoginScreen,
    App: UserRoute,
    Camara: Camara
  },
  {
    initialRouteName: 'Camara',
  }
);

export {
  rootRoutes
}