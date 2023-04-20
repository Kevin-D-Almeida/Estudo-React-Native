import React from "react";
import { Button } from "react-native";

export default props => {
    function Excutar(){
        console.warn("Excutado#01")
    }
    return(
    <>
        <Button title="Excutar!!!"
                onPress={Excutar}
        />
        <Button title="Excutar!!!"
                onPress={function Executar2(){
                    console.warn("Excutado#02")
                }}
        />
        <Button title="Excutar!!!"
                onPress={()=> console.warn("Executado#03")}
        />
    </>
    )
}