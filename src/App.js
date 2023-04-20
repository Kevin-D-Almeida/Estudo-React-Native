import React from "react";
import { View } from "react-native";

import Estilo from './components/estilo'
// import ContadorV2 from "./components/contador/ContadorV2";
import Paridades from "./components/Paridades";
export default ()=> (
     <View style={Estilo.App}>
        <Paridades num={2}/>
        {/* 
        <ContadorV2 num={100}/> 
        */
        }

    </View>
)