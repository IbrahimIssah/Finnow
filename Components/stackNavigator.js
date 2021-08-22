import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import Item from './item';
import OrderPage from './orderPage';
import CheckOut from './Checkout';


export default function Stack() {
const[data,setData]=useState([])
  

const Stack = createNativeStackNavigator();


  return (
   
   
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Item" component={Item}  />
  
  <Stack.Screen name="Checkout" component={CheckOut} />
  <Stack.Screen name="OrderPage" component={OrderPage} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


