import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Layout from "../screens/layout"
import Home from "../screens/home"
import Gallery from "../screens/gallery"
import Weather from "../screens/weather"

const Nav = createBottomTabNavigator();

function MainTabNavigator() {
    return(
        <NavigationContainer>
        <Nav.Navigator initialRouteName='Home'>
            
        <Nav.Screen 
                name = "Home"
                component = {Home}
                options={{ title: 'home'}}
            />
            
            <Nav.Screen 
                name = "Layout"
                component = {Layout}
                options={{ title: 'layout'}}
            />
            
            <Nav.Screen 
                    name = "Gallery"
                    component = {Gallery}
                    options={{ title: 'gallery Screen'}}
                />

            <Nav.Screen 
                    name = "Weather"
                    component = {Weather}
                    options={{ title: 'weather Screen'}}
                />     

        </Nav.Navigator>
    </NavigationContainer>

   )
}


export default MainTabNavigator