import axios from "axios";
import React, { Component } from "react";
import styles from "./styles/DetalhesBarbeariaStyles";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

export default class DetalhesBarbeariaScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          barbeiros: []
        };
      }

    componentDidMount() {
        axios
          .get("https://thebarberwebapi.azurewebsites.net/api/Barbeiro")
          .then(res => {
            const barbeiros = res.data;
            this.setState({ barbeiros });
          });
      }

    render() {
        const b = this.props.barbearia;
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Barbearia X</Text>
                <Text style={styles.text}>Endereco X</Text>
                <Text style={styles.text}>Cep X</Text>

                <ScrollView>
                {this.state.barbeiros.map((b, index) => (
                    <View style={styles.styleContainer} Key={index}>
                        <Text style={styles.text}>Nome: {b.nome}</Text>
                        <Text style={styles.text}>CPF: {b.cpf}</Text>
                        <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigate("Agendar", { state: b })}
                        >
                        <Text style={styles.buttonText}>Agendar</Text>
                        </TouchableOpacity>
                    </View>
                ))}
                </ScrollView>

            </View>
        );
    }
}