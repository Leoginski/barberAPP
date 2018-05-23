import React, { Component } from "react";

import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import styles from "./styles/LaunchScreenStyles";

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../images/launch-icon.png")}
            style={styles.logo}
          />
          <Text style={styles.title}></Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.containerLoginForm}>
            <TextInput
              value={this.state.username}
              style={styles.input}
              onChangeText={username => this.setState({ username })}
              placeholder="Usuário"
              placeholderTextColor="rgba(255,255,255,0.7)"
            />
            <TextInput
              value={this.state.password}
              style={styles.input}
              onChangeText={password => this.setState({ password })}
              placeholder="Senha"
              returnKeyType="go"
              placeholderTextColor="rgba(255,255,255,0.7)"
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigate("Menu", { state: this.state })}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigate("Cadastro", { state: this.state })}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
