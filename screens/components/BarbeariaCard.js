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
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
                <View>
                    <Text>Olá Barbearia</Text>
                </View>
        );
    }
}