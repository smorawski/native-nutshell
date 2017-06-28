import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    FlatList,
    StyleSheet,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import { get as getUsers } from '../actions/users';
import AddUserScene from './add-user-scene';

class MainScene extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    addUser() {
        const addUserView = {
            component: AddUserScene,
            title: 'Add User',
        }
        this.props.navigator.push(addUserView);
    }

    renderUser({item}) {
        return(
            <View style={styles.userContainer}>
                <View style={styles.userColumn}>
                    <Text>{ item.firstName }</Text>
                </View>
                <View style={styles.userColumn}>
                    <Text>{ item.lastName }</Text>
                </View>
                <View style={styles.userColumn}>
                    <Text>{ item.job }</Text>
                </View>
            </View>
        );
    }

    render() {
        return(
            <View style={{ marginTop: 100, height: '100%' }}>
                <View>
                    <Button
                        onPress={() => this.addUser() }
                        title="Add User"
                    />
                    <Text>Our Users:</Text>
                </View>
                <FlatList
                    data={this.props.users}
                    keyExtractor={(item) => item.id}
                    renderItem={this.renderUser}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    userColumn: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 10,
    }

});

export default connect(
    ({users}) => ({
        users: users.data,
    }),
    {
        getUsers,
    }
)(MainScene);


AppRegistry.registerComponent('MainScene', () => MainScene);
