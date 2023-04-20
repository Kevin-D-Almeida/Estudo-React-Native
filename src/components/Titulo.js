import React from "react";
import { Text } from "react-native";
import Estilo from './estilo'

export default props => (
    <>
        <Text style={Estilo.fontG}>{props.Principal}</Text>
        <Text>{props.Secundario}</Text>
    </>
)