import React, { Component } from "react";

import { TabNavigator } from 'react-navigation';

import BarbeariasScreen from "./BarbeariasScreen";
import AgendamentosScreen from "./AgendamentosScreen";

var Tabs = TabNavigator({
  Barbearias: { 
    screen: BarbeariasScreen,
  },
  Agendamentos: { 
    screen: AgendamentosScreen
    }
}, {
    tabBarPosition: "bottom",
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "black",
      activeBackgroundColor: "white",
      inactiveTintColor: "white",
      inactiveBackgroundColor: "black",
    }
  }
);

export default Tabs;