import React, { Component } from "react";
import Toast, { SHORT } from "react-native-easy-toast";
import t from "tcomb-form-native";
import axios from "axios";
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
const Usuario = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  nome: t.String,
  logradouro: t.String,
  numero: t.Number,
  bairro: t.String,
  cpf: t.String
});

export default class CadastroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadosCadastro: {
        email: "teste@teste.com",
        username: "teste123",
        password: "teste123",
        nome: "Testzão",
        logradouro: "Rua Marquês Vilela",
        numero: 999,
        bairro: "Centro",
        cpf: "130.759.886-26"
      }
    };
  }

  handleSubmit = () => {
    const payload = this._form.getValue(); // use that ref to get the form value
    axios
      .post("http://thebarberwebapi.azurewebsites.net/api/Usuario", payload, {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        this.refs.toast.show("Cadastrado com sucesso");
        setTimeout(() => {
          this.props.navigation.navigate("Launch", { state: this.state });
        }, 1500);
      });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView behavior="padding" style={styles.container}>
        <Toast ref="toast" />
        <View style={styles.formContainer}>
          <View style={styles.containerLoginForm}>
            <Form
              ref={c => (this._form = c)}
              value={this.state.dadosCadastro}
              type={Usuario}
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.handleSubmit}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
