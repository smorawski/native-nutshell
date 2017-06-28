/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Switch,
  Platform,
} from 'react-native';

export default class Component1 extends Component {

    constructor() {
        super();
        this.state = {
            text: 'Hello World',
        };
        console.log(Platform);
    }

    pressed() {
        console.log('pressed');
    }

    textChanged(value) {
        this.setState(
            {
                text: value
            }
        );
    }
  render() {
    return (
        <View style={styles.container}>
            <Text>{this.state.text}</Text>
            <Text>Lorem</Text>
                <TextInput
                    style={{width: 200, height: 50}}
                    onChangeText={(value) => this.textChanged(value)}
                />
                <Switch
                    onValueChange={ (value) => console.log(value) }
                />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Component1', () => Component1);
