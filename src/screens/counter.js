import React from "react";
import { Image, View , Text, Touchable, TouchableOpacity } from "react-native";
import Car1 from "../assets/car1.jpg"
import Car2 from "../assets/car2.jpg"


export default function Counter({navigation}){
    return(
        <View>
            <Text style={{textAlign:"center",color:"grey"}}>Welcome to Counter</Text>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("hello")
            }}>
                <Text>Go to hello</Text>
            </TouchableOpacity>
            <Image source={Car1} style={{width:"200px",height:"100px",borderRadius:"20px"}}/>
            <Image source={Car2} style={{width:"200px",height:"100px",borderRadius:"20px"}}/>
            <Image source={require("../assets/car3.jpg")} style={{width:"200px",height:"100px",borderRadius:"20px"}}/>
            {/* <Image source={{uri:""}} style={{}}/> */}

        </View>
    )
}