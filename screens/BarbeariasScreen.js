import React, { Component } from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles/BarbeariasScreenStyles";

export default class BarbeariasScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Barbearias</Text>
        <Text>Barbearias</Text>
        <Text>Barbearias</Text>
        <Text>Barbearias</Text>
        <Text>Barbearias</Text>
        <Text>Barbearias</Text>
      </View>
    );
  }
}