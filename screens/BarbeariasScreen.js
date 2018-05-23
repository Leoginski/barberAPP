import React, { Component } from "react";

import { View, Text } from "react-native";

import BarbeariaCard from "./components/BarbeariaCard";

import styles from "./styles/BarbeariasScreenStyles";

export default class BarbeariasScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barbearias: [{
        nome: "Barbearia do Tião",
        endereco: "Rua dos Bobos Nº 0",
        cep: "36240012",
      },
      {
        nome: "Barbearia do Zé",
        endereco: "Rua dos Foo Nº 1",
        cep: "36240123",
      },
      {
        nome: "Barbearia do Jão",
        endereco: "Rua dos Trouxas Nº 2",
        cep: "36241234",
      }],
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const barbearias = this.state.barbearias;

    return (
      <View style={styles.container}>
        {barbearias.map((b, index) =>
          <View style={styles.barbeariaContainer} Key={index}>
            <Text style={styles.text}>Nome: {b.nome}</Text>
            <Text style={styles.text}>Endereco: {b.endereco}</Text>
            <Text style={styles.text}>CEP: {b.cep}</Text>
          </View>)
        }
      </View>
    );
  }
}