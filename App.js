import React, { Component } from "react";

import { StackNavigator } from "react-navigation";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import MenuScreen from "./screens/MenuScreen";
import LaunchScreen from "./screens/LaunchScreen";
import CadastroScreen from "./screens/CadastroScreen";


console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return <NavigationApp />;
  }
}

const NavigationApp = StackNavigator(
  {
    Launch: { screen: LaunchScreen },
    Menu: { screen: MenuScreen },
    Cadastro: { screen: CadastroScreen },
  },
  navigationOptions = {
    title: "Title",
    header: {
      title: "Title",
      style: {
        backgroundColor: 'red'
      },
      tintColor: 'red'
    }
  }
);
