import React, { Component } from "react";
import { Text, View, KeyboardAvoidingView, Image } from "react-native";
import LoginScreen from "./LoginScreen";
import styles from "./styles/LaunchScreenStyles";

export default class LaunchScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../images/launch-icon.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Seu Shopping de Barbearias</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginScreen />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
