import React, { Component } from "react";

import {
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";

export default class BarbeariaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idBarbeiro,
          };
    }

    render() {
        //const { navigate } = this.props.navigation;

        return (
                <View>
                    <Text>{barbearia.Nome}</Text>
                </View>
        );
    }
}