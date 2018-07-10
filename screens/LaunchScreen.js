import axios from 'axios';
import t from 'tcomb-form-native';
import React, { Component } from 'react';
import Toast, {SHORT} from 'react-native-easy-toast'

import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import styles from "./styles/LaunchScreenStyles";

const Form = t.form.Form;

const Usuario = t.struct({
    Username: t.String,
    Password: t.String
  });

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: ""
    };
  }

  static navigationOptions = {
    title: "",
    headerTintColor: 'lightgrey',
    headerStyle: {
      backgroundColor: '#1e272e'
    },
  }
  
  handleSubmit = () => {
    const value = this._form.getValue();

    axios.post('http://thebarberwebapi.azurewebsites.net/api/Authentication/login', value, {
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
        <View style={styles.logoContainer}>
          <Image
            source={require("../images/launch-icon.png")}
            style={styles.logo}
          />
          <Text style={styles.title}></Text>
          <Toast ref="toast"/>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.containerLoginForm}>
          <Form
            ref={c => this._form = c}
            type={Usuario}
          />
            {/* <TextInput
              value={this.state.Username}
              style={styles.input}
              onChangeText={Username => this.setState({ Username })}
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
              // onPress={() => navigate("Menu", { state: this.state })}
                onPress={this.handleSubmit}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigate("Cadastro", { state: this.state })}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
