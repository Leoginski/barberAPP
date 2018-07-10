import React, { Component } from "react";

import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";

import BarbeariaCard from "./components/BarbeariaCard";

import styles from "./styles/BarbeariasScreenStyles";

export default class DetalhesBarbeariaScreen extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const b = this.props.barbearia;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Barbearia X</Text>
                <Text style={styles.text}>Endereco X</Text>
                <Text style={styles.text}>Cep X</Text>

                <ScrollView>
                {b.barbeiros.map((b, index) => (
                    <View style={styles.styleContainer} Key={index}>
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
                ))}
                </ScrollView>

            </View>
        );
    }
}