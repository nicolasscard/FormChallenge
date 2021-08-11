/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/@core/Redux/store';
import App from './src/app/App';
import {name as appName} from './app.json';

const Aplication = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

AppRegistry.registerComponent(appName, () => Aplication);