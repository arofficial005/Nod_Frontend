import React,{Component, useState,useEffect } from 'react';
import { StyleSheet,Text,ScrollView,View,Image,TextInput,Button,TouchableOpacity} from 'react-native';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Index from './src/screens/index';
import Referral from './src/screens/Referral';
import CustomSidebarMenu from './src/screens/CustomSidebarMenu';
import Notifications from './src/screens/Notifications';
import Account from './src/screens/Account';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const  App=()=>{
  

  useEffect(() => {
   
     setTimeout(() => {
      SplashScreen.hide();
      // go to Home page
  }, 1000)
     //hides the splash screen on app load.
  }, []);

    return (
    

      <NavigationContainer>

<Drawer.Navigator  drawerContent={props => <CustomSidebarMenu {...props}/>}
initialRouteName="Referral"
>
  
        <Drawer.Screen
          name="Home"
          component={Referral}
        />
        <Drawer.Screen
          name="About"
          component={Index}
        />
         <Drawer.Screen
          name="Notifications"
          component={Notifications}
        /> 
          <Drawer.Screen
        name="Accounts"
        component={Account}
        options ={{  
          headerShown: false,
        }}/>  
        <Drawer.Screen
        name="Contact Us"
        component={Index}
      />
    
      </Drawer.Navigator> 
{/* 
     <Stack.Navigator initialRouteName="Referral">
  <Stack.Screen name="Referral" component={Referral} 
   options ={{  
    headerTitleStyle:{
      fontSize:25,
      color: 'black',
      fontFamily: 'Poppins',
      alignSelf:'flex-start',
    },
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitle:"Referral", }}/>

      <Stack.Screen name="About" component={Index}
       options ={{  
        headerTitleStyle:{
          fontSize:25,
          color: 'black',
          fontFamily: 'Poppins',
          alignSelf:'flex-start',
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitle:"Settings" }}/>
    </Stack.Navigator> */}
    </NavigationContainer>

    
    );
  }
export default App;