import React, { Component } from "react";
import axios from "axios";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import BarbeariaCard from "./components/BarbeariaCard";

import styles from "./styles/BarbeariasScreenStyles";

export default class BarbeariasScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barbearias: []
    };
  }

  componentDidMount() {
    axios
      .get("https://thebarberwebapi.azurewebsites.net/api/Barbearia")
      .then(res => {
        const barbearias = res.data;
        this.setState({ barbearias });
      });
  }

  render() {
    const barbearias = this.state.barbearias;

    return (
      <ScrollView style={styles.container}>
        {barbearias.map((b, index) => <BarbeariaCard barbearia={b} />)}
      </ScrollView>
    );
  }
}
