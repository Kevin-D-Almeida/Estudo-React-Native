import React from 'react'
import {Text, View} from 'react-native'
import Estilo from '../estilo'

export default props =>{
    return(
        <View style={Estilo.DisplayCont}>
            <Text style={[Estilo.fontG, Estilo.TextDisplayCont]}>
                {props.num}
            </Text>
        </View>
    )
 }