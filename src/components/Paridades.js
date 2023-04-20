import React from 'react'
import {Text, View} from 'react-native'
import Estilo from './estilo'

export default props =>{
    return(
        <View>
            <Text style={Estilo.fontG}>O resultado é: </Text>
            {props.num % 2 === 0 
                ? <Text style={Estilo.fontG}>Par</Text>
                :<Text style={Estilo.fontG}>Impar</Text>
            }
        </View>
    )
 }