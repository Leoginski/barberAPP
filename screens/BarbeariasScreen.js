import React, { Component } from "react";
import axios from 'axios';

import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import BarbeariaCard from "./components/BarbeariaCard";

import styles from "./styles/BarbeariasScreenStyles";

export default class BarbeariasScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barbearias: [],
    }
  };

  componentDidMount() {
    axios.get('https://thebarberwebapi.azurewebsites.net/api/Barbearia')
      .then(res => {
        const barbearias = res.data;
        this.setState({ barbearias });
      })
  }

  render() {
    const { navigate } = this.props.navigation;
    const barbearias = this.state.barbearias;

    return (
      <ScrollView style={styles.container}>
        {barbearias.map((b, index) =>
          <View style={styles.barbeariaContainer} Key={index}>
            <Text style={styles.text}>Nome: {b.nome}</Text>
            <Text style={styles.text}>Endereco: {b.logradouro}</Text>
            <Text style={styles.text}>Numero: {b.numero}</Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigate("Detalhes", { state: b })}
            >
              <Text style={styles.buttonText}>Detalhes</Text>
            </TouchableOpacity>
          </View>)
        }
      </ScrollView>
    );
  }
}