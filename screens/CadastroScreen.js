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

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    }
  },
  controlLabel: {
    normal: {
      color: "blue",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

export default class CadastroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadosCadastro: {
        email: "lucas@lucas.com",
        username: "lucas",
        password: "luca4125",
        nome: "Lucas",
        logradouro: "teste",
        numero: 100,
        bairro: "teste",
        cpf: "130.759.886-26"
      }
    };
  }

  handleSubmit = () => {
    this.refs.toast.show("handle submit");

    const payload = this._form.getValue(); // use that ref to get the form value
    if (payload) {
      this.refs.toast.show(payload);
      console.log(payload); // value here is an instance of Person
    }
    axios
      .post("http://thebarberwebapi.azurewebsites.net/api/Usuario", payload, {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        this.refs.toast.show("Cadastrado com sucesso");
        () => navigate("Launch", { state: this.state });
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
