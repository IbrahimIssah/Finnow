import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import axios from 'axios'
import Stack from './Components/stackNavigator';
import { WebView } from 'react-native-webview';

import { dataContext, DataProvider } from './Components/dataContext';
import Home from './Components/Home';
export default function App() {
  
  const[datas,setDatas]=useState([])

 

  const Fetch= async()=>{
    const axios = require('axios');

// Make a request for a user with a given ID
await axios.get('http://localhost:3001/posts') 
  .then(function (response) {
    // handle success
    //alert('djg')
    setData(response.data)
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }



  return (
    <DataProvider>
    
    <View  style={styles.container} >

    
      
     

      <Stack/>

     
    </View>
</DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
