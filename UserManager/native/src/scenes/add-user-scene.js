import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import { create as createUser } from '../actions/users';

class AddUserScene extends Component {

    firstName = '';
    lastName = '';
    job = '';

    addUser() {
        const { firstName, lastName, job } = this;
        this.props.createUser({
            firstName,
            lastName,
            job,
        })
        .then(() => this.goBack());
    }

    goBack() {
        this.props.navigator.pop();
    }

    render() {
        return(
            <View style={{ marginTop: 100, height: '100%' }}>
                <Button onPress={() => this.goBack()} title="Back" />
                <View>
                    <Text>Add User:</Text>
                </View>
                <View>
                    <Text>First Name: </Text>
                    <TextInput
                        style={{width: 200, height: 50}}
                        onChangeText={(value) => { this.firstName = value; }}
                    />
                </View>
                <View>
                    <Text>Last Name: </Text>
                    <TextInput
                        style={{width: 200, height: 50}}
                        onChangeText={(value) =>{ this.lastName = value; }}
                    />
                </View>
                <View>
                    <Text>Job: </Text>
                    <TextInput
                        style={{width: 200, height: 50}}
                        onChangeText={(value) => {this.job = value; }}
                    />
                </View>
                <Button
                    onPress={() => this.addUser() }
                    title="Add"
                />
            </View>
        );
    }
}

export default connect(
    null,
    {
        createUser,
    }
)(AddUserScene);


AppRegistry.registerComponent('AddUserScene', () => AddUserScene);
