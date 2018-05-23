import React, { Component } from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles/AgendamentosScreenStyles";

export default class AgendamentosScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agendamentos: [{
        barbearia: "Barbearia do Zé",
        barbeiro: "Zé",
        servico: "Aparar a Barba",
        horario: "13:00",
      },
      {
        barbearia: "Barbearia do Jão",
        barbeiro: "Jão",
        servico: "Corte de Cabelo",
        horario: "14:00",
      }],
    }
  };

  render() {
    const { navigate } = this.props.navigation;
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