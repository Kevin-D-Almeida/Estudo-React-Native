import React from "react";
import { Text } from "react-native";
import Estilo from './estilo'

export default (props) =>{
    Valor = props.Valor1 - props.Valor2

    Result = Math.random(Valor) * 100
    Teste = Math.floor(Result)
    
    console.warn(Result)
    return(
        <Text style={Estilo.fontG}>
            {Teste}
        </Text>
    )
}