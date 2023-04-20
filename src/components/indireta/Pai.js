import React, {useState} from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'

export default props =>{
    const [num, setNum] = useState(0)
    const [texto, setText] = useState("")

        function exibirValor(numero, texto){
            setNum(numero)
            setText(texto)
        }
    return(
        <>
        <Text style={Estilo.fontG}>
           {texto} {num}
        </Text>
        <Filho 
        max ={60}
        min = {1}
        func={exibirValor}/>
        </>

    )
 }