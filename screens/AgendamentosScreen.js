import React, { Component } from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles/AgendamentosScreenStyles";

export default class AgendamentosScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Agendamento</Text>
        <Text>Agendamento</Text>
        <Text>Agendamento</Text>
        <Text>Agendamento</Text>
        <Text>Agendamento</Text>
        <Text>Agendamento</Text>
      </View>
    );
  }
}