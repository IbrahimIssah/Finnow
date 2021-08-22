import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View,Button,Image, TouchableOpacity,ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios'
import { dataContext } from './dataContext';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';


export default function Home({navigation}) {
  const{product_,data_}=useContext(dataContext)
  const[product,setProduct]=product_
  const[check,setCheck]=useState(false)
const[data,setData]=useState([])

  
  
  

useEffect( async()=>{
    const axios = require('axios');
    await axios.get('http://localhost:3000/data') 
      .then( (response)=> {
      
       setData(response.data)
        console.log(response);
      })
      .catch((error)=> {
       
        console.log(error);
      })
     
    
  },[])




  

  return (
    
    <View style={styles.container}  > 

    <ScrollView>
   
      { data &&
        data.map(item=>{
          return(
            <View style={{margin:5,backgroundColor:'white'}}>
            <TouchableOpacity onPress={()=>{
              setProduct(item)
navigation.navigate('Item')
            }}>
            <Image style={{width:120,height:90}}  
            source={{uri:item.url}} /> 
            <Text>{item.title}</Text>
            <Text style={{color:'tomato'}}>${item.price}</Text>
            </TouchableOpacity>
            </View>
          )
        })
      }
      </ScrollView>
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
