import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from "../screens/layout"
import Home from "../screens/home"
import Gallery from "../screens/gallery"

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                
            <Stack.Screen 
                    name = "Home"
                    component = {Home}
                    options={{ title: 'home Screen'}}
                />
                
                <Stack.Screen 
                    name = "Layout"
                    component = {Layout}
                    options={{ title: 'layout Screen'}}
                />

                <Stack.Screen 
                    name = "Gallery"
                    component = {Gallery}
                    options={{ title: 'gallery Screen'}}
                />

            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default MainStackNavigator