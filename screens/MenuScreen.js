import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
const SideMenu = require("react-native-side-menu");

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: "Menu"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Tela de Menu</Text>
      </View>
    );
  }
}
