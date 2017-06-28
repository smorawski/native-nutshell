import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Switch,
    Platform,
} from 'react-native';

class Component1 extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Hello',
            editInput: true,
        };
    };

    input = null;

    onTextChange(message) {
        this.setState({
            message,
        });
    };
;
    editFinished(e) {
        this.input.clear();
    }

    onPress() {
        this.setState({
            message: 'Hello',
        });
    };

    toggleInput() {
        this.setState({
            editInput: !this.state.editInput,
        });
    }

    render() {
        return(
            <View>
                <View style={styles.blackContainer}>
                    <Text style={styles.whiteText}>
                        {this.state.message}
                    </Text>
                    <Text style={styles.whiteText}>
                        That's it
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        ref={(el) => { this.input = el; } }
                        onChangeText={(value) => this.onTextChange(value)}
                        onSubmitEditing={() => this.editFinished()}
                        initialValue={this.state.message}
                        placeholder="Input"
                        editable={this.state.editInput} />
                </View>
                <TouchableHighlight style={styles.greenContainer} onPress={() => this.onPress()}>
                    <Text>Reset!</Text>
                </TouchableHighlight>
                <Switch
                    onValueChange={() => this.toggleInput()}
                    value={this.state.editInput}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        blackContainer: {
            marginTop: Platform.OS === 'ios' ? 20 : 0,
            backgroundColor: 'black',
        },
        whiteText: {
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
        },
        greenContainer: {
            backgroundColor: 'green',
        },
        textInput: {
            height: 50,
        },
    }
);

AppRegistry.registerComponent('Component1', () => Component1);

export default Component1;
