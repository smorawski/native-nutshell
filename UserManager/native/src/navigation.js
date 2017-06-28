import React, { Component } from 'react';
import {
    AppRegistry,
    NavigatorIOS,
} from 'react-native';
import MainScene from './scenes/main-scene';

const Navigation = () => (
    <NavigatorIOS
        style={{ flex: 1 }}
        initialRoute={{
          component: MainScene,
          title: 'Users',
        }}
    />
);

export default Navigation;

AppRegistry.registerComponent('Navigation', () => Navigation);
