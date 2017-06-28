import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    TextInput,
    FlatList,
    Button,
} from 'react-native';

const users = [
    'John Woodstock',
    'Elise OpenAir',
    'Gerard Metalmania',
    'Anna Buła',
];

export default class Component2 extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.setState({
            users,
        });
    }

    addUser() {
        if (!this.newUser) {
            return;
        }
        this.setState({
            users: [...this.state.users, this.newUser],
        }, () => { this.newUser = null; });
    }

    renderItem({item}) {
        return(<Text>{item}</Text>);
    }

    render() {
        return(
            <View>
                <FlatList
                    data={this.state.users}
                    keyExtractor={(item) => (item)}
                    renderItem={(el) => this.renderItem(el)}
                />
                <TextInput
                    onChangeText={(value) => { this.newUser = value }}
                    style={{height: 50,}}
                />
                <Button
                    onPress={() => this.addUser()}
                    title="Add"
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Component2', () => Component2);
