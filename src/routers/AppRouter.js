import * as React from 'react'; 
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

 
import Login from '../components/Auth/Login'; 
import ForgotPassword from '../components/Auth/ForgotPassword';
import Signup from '../components/Auth/Signup';
import HomeScreen from '../components/Home';
import CreateMilitaryAccount from '../components/Auth/CreateMilitaryAccount';
import CreateMilitaryAccount2 from '../components/Auth/CreateMilitaryAccount2';

import homeDashboard4 from '../components/Private/Level4/HomeDashboard4';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function AppRouter ({ navigation }){
  
    const [token, setToken] = useState(false);
    const [userLevel, setUserLevel] = useState(4);

    useEffect(() => {
       //setToken(1)
       //setUserLevel(4)
       console.log("Actualizar el State")
      },[setToken, setUserLevel]);
    
    if(!token) {
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home"> 
                  <Stack.Screen name="home" component={HomeScreen} />
                  <Stack.Screen name="login" component={Login} />
                  <Stack.Screen name="forgotPassword" component={ForgotPassword} />
                  <Stack.Screen name="Signup" component={Signup} />
                  <Stack.Screen name="createMilitaryAccount" component={CreateMilitaryAccount} />
                  <Stack.Screen name="createMilitaryAccount2" component={CreateMilitaryAccount2} />
                  
                </Stack.Navigator> 
            </NavigationContainer>
        )
    }

    else {

        switch(parseInt(userLevel)) {

            case 4:
                return  (
                    <NavigationContainer>
                        <Drawer.Navigator initialRouteName="homeDashboard4">
                            <Drawer.Screen name="Home" component={homeDashboard4} /> 
                            <Drawer.Screen name="Profile" component={homeDashboard4} /> 
                            <Drawer.Screen name="Basic Data" component={homeDashboard4} /> 
                        </Drawer.Navigator>
                    </NavigationContainer>
                        )
           
            default:
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Login"> 
                        <Stack.Screen name="home" component={Login} />
                    </Stack.Navigator> 
                </NavigationContainer>
        } 
    }
}

