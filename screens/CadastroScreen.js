import React, { Component } from "react";
import Toast, {SHORT} from 'react-native-easy-toast'
import t from 'tcomb-form-native';
import axios from 'axios';
import {
    Text,
    View,
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";

import styles from "./styles/CadastroScreenStyles";

const Form = t.form.Form;

const Usuario = t.struct({
    email: t.String,
    nome: t.maybe(t.String),
    UserName: t.String,
    Password: t.String
  });

  const formStyles = {
    ...Form.stylesheet,
    formGroup: {
      normal: {
        marginBottom: 10
      },
    },
    controlLabel: {
      normal: {
        color: 'blue',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      },
      // the style applied when a validation error occours
      error: {
        color: 'red',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      }
    }
  }  

export default class CadastroScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cliente: {
                idCliente: "",
                nome: "",
                logradouro: "",
                numero: "",
                bairro: "",
                cpf: "",
            },
            UserName: "",
            Password: "",
            Email: "",
        };
    }

    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value

        axios.post('http://thebarberwebapi.azurewebsites.net/api/Usuario', value, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then( res=>{
            this.refs.toast.show("OK");
            this.refs.toast.show(res.data);                
        })
      }

    handleClick(event){
        const payload = {
            UserName: this.state.UserName,
            Password: this.state.Password,
            Email: this.state.Email,
            nome: this.state.nome          
        }

        axios.post('http://thebarberwebapi.azurewebsites.net/api/Usuario', payload, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then( res=>{
            this.refs.toast.show(res.data);                
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Toast ref="toast"/>
                <View style={styles.formContainer}>
                    <View style={styles.containerLoginForm}>
                        <Form 
                        ref={c => this._form = c}
                        type={Usuario}
                        />
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
                             onPress={this.handleSubmit}
                            // onPress={(event) => this.handleClick(event)}
                        >
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}