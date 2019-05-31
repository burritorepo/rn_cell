import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';

import { NavigationService } from './api'
import { rootRoutes } from './routes';
const AppContainer = createAppContainer(rootRoutes);

export default class App extends Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}