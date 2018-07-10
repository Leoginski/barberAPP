import axios from "axios";
import React, { Component } from "react";
import styles from "./styles/BarbeariasScreenStyles";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

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
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        {barbearias.map((b) => (
          <View Key={b.idBarbearia} style={styles.barbeariaContainer}>
            <Text style={styles.text}>Nome: {b.nome}</Text>
            <Text style={styles.text}>Endereco: {b.logradouro}</Text>
            <Text style={styles.text}>Numero: {b.numero}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("Detalhes", { state: b })}>
                <Text style={styles.buttonText}>Detalhes</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  }
}
