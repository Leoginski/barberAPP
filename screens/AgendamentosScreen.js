import axios from "axios";
import React, { Component } from "react";
import styles from "./styles/AgendamentosScreenStyles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default class AgendamentosScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agendamentos: [],
    }
  };

  componentDidMount() {
    axios
      .get("https://thebarberwebapi.azurewebsites.net/api/Agendamento")
      .then(res => {
        const agendamentos = res.data;
        this.setState({ agendamentos });
      });
  }

  render() {
    const agendamentos = this.state.agendamentos;

    return (
      <View style={styles.container}>
        {agendamentos.map((a, index) =>
          <View style={styles.agendamentoContainer} Key={index}>
            <Text style={styles.text}>Barbearia: {a.barbearia}</Text>
            <Text style={styles.text}>Barbeiro: {a.barbeiro}</Text>
            <Text style={styles.text}>Servico: {a.servico}</Text>
            <Text style={styles.text}>Horário: {a.horario}</Text>
          </View>)
        }
      </View>
    );
  }
}