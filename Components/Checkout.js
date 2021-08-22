import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View,Button,Image, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios'
import { dataContext } from './dataContext';

export default function CheckOut({navigation}) {
    const{data_,product_,cart_}=useContext(dataContext)
const[data,setData]=data_ 
const[product,setProduct]=product_
const[cartItems,setCartItems]=cart_

const PlaceOrder=async()=>{
    const axios = require('axios');
    await axios.post('http://localhost:3000/orders',cartItems )  
      .then((response)=> {
      
       //setData(response.data)
       navigation.navigate('OrderPage')
        console.log(response);
      })
      .catch( (error)=> {
       
        console.log(error);
      })
  }

const RemoveItem=(a)=>{
    if(cartItems.length==1){
        setCartItems([])
    }
    else{
const filter = cartItems.filter(item=>item.id!=a)
setCartItems(filter)
    }
}



 
  return (
    
    <View style={styles.container}  > 
    
    <ScrollView>
    {cartItems.map(item=>{
        return(
           <View style={{margin:5,backgroundColor:'white'}}>
           <Image style={{width:120,height:90}}  
           source={{uri:item.url}} /> 
           <Text>{item.title}</Text>
           <Text style={{color:'tomato'}}>cost per unit:${item.price}</Text>
           <Text>Quantity:{item.quantity}</Text>
           <Text style={{color:'tomato'}} > Total cost:${item.price * item.quantity}</Text>
           <Button title='remove' onPress={()=>RemoveItem(item.id)}/>
           </View> 
        )
    })}
      

  {cartItems && cartItems.length > 0 && <Button title='Confirm Order' onPress={PlaceOrder}/>}
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
        
      
    }
  
});