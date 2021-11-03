import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hello from "../screens/hello";
import Counter from "../screens/counter";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/home"
import About from "../screens/about"
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function RouteNavigation(){
    return(
        <NavigationContainer>
            {true?
            (<Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Home') {
                      iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline';
                    } else if (route.name === 'About') {
                      iconName = focused ? 'ios-information-circle'
                      : 'ios-information-circle-outline';
                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'blue',
                  tabBarInactiveTintColor: 'gray',
                })}
              >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="About" component={About} />
              </Tab.Navigator>):
            (<Stack.Navigator>
                <Stack.Screen name="hello" component= {Hello}/>
                <Stack.Screen name="counter" component= {Counter}/>

            </Stack.Navigator>)}
        </NavigationContainer>
    )
}