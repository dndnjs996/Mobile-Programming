import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from "../screens/layout"
import Home from "../screens/home"
import Gallery from "../screens/gallery"

const Nav = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                
            <Nav.Screen 
                    name = "Home"
                    component = {Home}
                    options={{ title: 'home Screen'}}
                />
                
                <Nav.Screen 
                    name = "Layout"
                    component = {Layout}
                    options={{ title: 'layout Screen'}}
                />

                <Nav.Screen 
                    name = "Gallery"
                    component = {Gallery}
                    options={{ title: 'gallery Screen'}}
                />

            </Nav.Navigator>
        </NavigationContainer>

    )
}
export default MainStackNavigator