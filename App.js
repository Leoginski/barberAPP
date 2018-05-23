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

const NavigationApp = StackNavigator({
  Launch: {
    screen: LaunchScreen,
    navigationOptions: {
      title: "",
      headerStyle: {
        backgroundColor: '#1e272e'
      },
    }
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      title: "Menu",
      headerStyle: {
        backgroundColor: '#1e272e'
      },
    }
  },
  Cadastro: {
    screen: CadastroScreen,
    navigationOptions: {
      title: "Cadastre-se",
      headerStyle: {
        backgroundColor: '#1e272e'
      },
    }
  },
});
