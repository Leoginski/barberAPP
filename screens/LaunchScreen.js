import React, { Component } from "react";
import Toast, { SHORT } from "react-native-easy-toast";
import t from "tcomb-form-native";
import axios from "axios";
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
const Login = t.struct({
  Username: t.String,
  Password: t.String
});

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadosLogin: {
        Username: "",
        Password: ""
      }
    };
  }

  handleClick(event) {
    var loginUrl =
      "http:thebarberwebapi.azurewebsites.net/api/Authentication/login";

    const payload = this._form.getValue(); // use that ref to get the form value

    axios
      .post(loginUrl, payload, {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        this.refs.toast.show("Login feito com sucesso!");
        setTimeout(() => {
          this.props.navigation.navigate("Menu", { state: this.state });
        }, 1500);
      })
      .catch(error => {
        if (error.response.status.toString() == "400") {
          this.refs.toast.show("Login ou senha incorretos!");
        }
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
          <Text style={styles.title} />
          <Toast ref="toast" />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.containerLoginForm}>
            <Form
              ref={c => (this._form = c)}
              value={this.state.dadosLogin}
              type={Login}
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={event => this.handleClick(event)}
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
