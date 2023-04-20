import React, {useState} from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'

import Display from './Display'
import ContadorBotoes from './ContadorBotoes'
export default props =>{
    const [num, setNum] = useState(0)
    function inc(){
        setNum(num + 1)
    }
    function dec(){
        setNum(num - 1)
    }

    return(
        <>
            <Text style={Estilo.fontG}>
                contador
            </Text>
            <Display num={num}/>
            <ContadorBotoes inc={inc} dec={dec} />
        </>
    )
 }