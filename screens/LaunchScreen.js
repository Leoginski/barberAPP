import React, { Component } from 'react';
import Toast, {SHORT} from 'react-native-easy-toast'
import axios from 'axios';

import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import styles from "./styles/LaunchScreenStyles";

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
  
  handleClick(event){
    var loginUrl = "http://thebarberwebapi.azurewebsites.net/api/Authentication/login";
    var self = this;

    var payload={
    Username:this.state.Username,
    Password:this.state.Password
    };

    axios.post(loginUrl, payload).then(response => {
      this.refs.toast.show("sucesso");
      if(response.data.code == 200){
        this.refs.toast.show("Logado!");
        navigate("Menu", { state: this.state })
      }else{
        this.refs.toast.show('Usuário não cadastrado!');
      }
    }).catch(function (error) {
        this.refs.toast.show(error);
    });
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
            <TextInput
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
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigate("Menu", { state: this.state })}
              //onPress={(event) => this.handleClick(event)}
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
