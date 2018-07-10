import React, { Component } from "react";

import {
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";

export default class BarbeariaCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const b = this.props.barbearia;

        return (
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
          </View>
        );
    }
}