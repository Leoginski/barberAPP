import React, { Component } from "react";
import LaunchScreen from "./screens/LaunchScreen";
import MenuScreen from "./screens/MenuScreen";
import { StackNavigator } from "react-navigation";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default class App extends Component {
  render() {
    return <NavigationApp />;
  }
}

const NavigationApp = StackNavigator(
  {
    Launch: { screen: LaunchScreen },
    Menu: { screen: MenuScreen }
  },
  {
    navigationOptions: {}
  }
);
