import React, { Component } from "react";
import Toast, {SHORT} from 'react-native-easy-toast'
import t from 'tcomb-form-native';
import axios from 'axios';
import {
    Text,
    View,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";

import styles from "./styles/CadastroScreenStyles";

const Form = t.form.Form;

const Barbeiro = t.struct({
    nome: t.String,
    logradouro: t.String,
    numero: t.String,
    complemento: t.String,
    bairro: t.String,
    cpf: t.String,
  });

export default class CadastroScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cliente: {
                nome: "12345",
                logradouro: "12345",
                numero: "12345",
                bairro: "12345",
                cpf: "12345",
                cep: "12345",
            },
            UserName: "12345",
            Password: "12345",
            Email: "12345@12345.com",
        };
    }

    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value

        axios.post('http://thebarberwebapi.azurewebsites.net/api/Barbeiro', value, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then( res=>{
            this.refs.toast.show(res.data);            
            // this.refs.toast.show(JSON.stringify(res.data));                    
        })
      }

    handleClick(event){
        const payload = {
            UserName: this.state.UserName,
            Password: this.state.Password,
            Email: this.state.Email,
            Cliente: this.state.cliente
        }
        this.refs.toast.show("teste");                
        axios.post('http://thebarberwebapi.azurewebsites.net/api/Usuario', payload, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then( res=>{
            this.refs.toast.show(JSON.stringify(res.data));                
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView behavior="padding" style={styles.container}>
                <Toast ref="toast"/>
                <View style={styles.formContainer}>
                    <View style={styles.containerLoginForm}>
                        {/* <Form 
                        ref={c => this._form = c}
                        type={Barbeiro}
                        /> */}
                        {/* <TextInput
                            value={this.state.cliente.nome}
                            style={styles.input}
                            onChangeText={nome => this.setState({ nome })}
                            placeholder="Nome"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                        />
                        <TextInput
                            value={this.state.Email}
                            style={styles.input}
                            onChangeText={email => this.setState({ email })}
                            placeholder="Data de Nascimento"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                        />
                        <TextInput
                            value={this.state.UserName}
                            style={styles.input}
                            onChangeText={UserName => this.setState({ UserName })}
                            placeholder="Usuário"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                        />
                        <TextInput
                            value={this.state.Password}
                            style={styles.input}
                            onChangeText={Password => this.setState({ Password })}
                            placeholder="Senha"
                            returnKeyType="go"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            secureTextEntry
                        /> */}

                        <TouchableOpacity
                            style={styles.buttonContainer}
                            //onPress={() => navigate("Launch", { state: this.state })}
                            //  onPress={this.handleSubmit}
                             onPress={(event) => this.handleClick(event)}
                        >
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}