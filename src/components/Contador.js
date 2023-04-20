import React, {useState} from "react";
import { Text, Button } from "react-native";
import Estilo from "./estilo"

export default props =>{
    const [Num, setNum] = useState(props.Inicial)

    function Incre (){
        setNum(Num + 1)
    }

    function Decre (){
        setNum(Num - 1)
    }

    return(
        <>
            <Text style={Estilo.fontG}>{Num}</Text>
            <Button title="+" onPress={Incre}/>
            <Button title="-" onPress={Decre}/>
        </>
    )
}