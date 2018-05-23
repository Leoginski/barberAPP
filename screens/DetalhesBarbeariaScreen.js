import React, { Component } from "react";

import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";

import BarbeariaCard from "./components/BarbeariaCard";

import styles from "./styles/BarbeariasScreenStyles";

export default class DetalhesBarbeariaScreen extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Barbearia X</Text>
                <Text style={styles.text}>Endereco X</Text>
                <Text style={styles.text}>Cep X</Text>

                <ScrollView>
                    <View style={styles.styleContainer}>
                        <Text style={styles.text}>Desfarçado</Text>
                        <Image
                            source={require("../images/launch-icon.png")}
                            style={styles.logo}
                        />
                    </View>
                    <View style={styles.styleContainer}>
                        <Text style={styles.text}>Bigode</Text>
                        <Image
                            source={require("../images/launch-icon.png")}
                            style={styles.logo}
                        />
                    </View>
                    <View style={styles.styleContainer}>
                        <Text style={styles.text}>Cavanhaque</Text>
                        <Image
                            source={require("../images/launch-icon.png")}
                            style={styles.logo}
                        />
                    </View>
                    <View style={styles.styleContainer}>
                        <Text style={styles.text}>Asadelta</Text>
                        <Image
                            source={require("../images/launch-icon.png")}
                            style={styles.logo}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    }
}