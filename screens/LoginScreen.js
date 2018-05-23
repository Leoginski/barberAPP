import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles/LoginScreenStyles";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          style={styles.input}
          onChangeText={username => this.setState({ username })}
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.7)"
        />
        <TextInput
          value={this.state.password}
          style={styles.input}
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          returnKeyType="go"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
