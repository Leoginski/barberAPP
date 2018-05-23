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
    }

    render() {
        const barbearia = this.props.barbearia;

        return (
                <View>
                    <Text>{barbearia.Nome}</Text>
                </View>
        );
    }
}