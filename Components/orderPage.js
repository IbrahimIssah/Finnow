import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios'
import { dataContext } from './dataContext';

export default function OrderPage() {
    const{data_,product_}=useContext(dataContext)
const[data,setData]=useState([])
  



  return (
    
    <View style={styles.container}  > 
    <View style={styles.container1} >
      <Text >your Order was Successful</Text>
      </View>
     
    
     
    </View>
   
    
  );
}

const styles = StyleSheet.create({
    container:{
  
        flex:1,
    justifyContent:'center',
    alignItems:'center',
        backgroundColor:'grey',
        
      
    },
    container1:{
       
        with:100,
       color:'blue'
    }
});