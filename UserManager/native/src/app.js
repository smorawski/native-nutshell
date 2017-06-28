import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import configureStore from './store/configure-store';

export default class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <Navigation />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('App', () => App);
