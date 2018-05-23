import React, { Component } from "react";

import {
    Text,
    View,
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";

import styles from "./styles/CadastroScreenStyles";

export default class CadastroScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            data_nascimento: "",
            endereco: "",
            username: "",
            password: "",
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.containerLoginForm}>
                        <TextInput
                            value={this.state.nome}
                            style={styles.input}
                            onChangeText={nome => this.setState({ nome })}
                            placeholder="Nome"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                        />
                        <TextInput
                            value={this.state.data_nascimento}
                            style={styles.input}
                            onChangeText={data_nascimento => this.setState({ data_nascimento })}
                            placeholder="Data de Nascimento"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                        />
                        <TextInput
                            value={this.state.username}
                            style={styles.input}
                            onChangeText={username => this.setState({ username })}
                            placeholder="Usuário"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                        />
                        <TextInput
                            value={this.state.password}
                            style={styles.input}
                            onChangeText={password => this.setState({ password })}
                            placeholder="Senha"
                            returnKeyType="go"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            secureTextEntry
                        />

                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => navigate("Launch", { state: this.state })}
                        >
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}