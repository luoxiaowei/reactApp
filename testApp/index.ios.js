/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import AppContainer from './src/index';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
AppRegistry.registerComponent('testApp', () => App);

