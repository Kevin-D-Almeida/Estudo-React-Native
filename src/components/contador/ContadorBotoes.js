import React from 'react'
import {Button, View} from 'react-native'
import Estilo from '../estilo'
export default props =>{
    return(
        <>
        <View style={Estilo.ViewBotoesContador}>
                <Button title='+' onPress={props.inc}/>
                <Button title='-' onPress={props.dec}/>
        </View>
        </>
    )
 }