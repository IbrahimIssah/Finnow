import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios'
import { dataContext } from './dataContext';

export default function Item({navigation}) {
    const{data_,product_,cart_,confirm_}=useContext(dataContext)
const[data,setData]=data_
const[product,setProduct]=product_
const[cartItems,setCartItems]=cart_
const[confirm,setConfirm]=confirm_
const[productQuantity,setProductQuantity]=useState(1)
const[check,setCheck]=useState(false)
const[cartIds,setCartIds]=useState([])


{/**huhurhu nrhr */}
    


   useEffect(()=>{
//setCheck(false)
   },[])
    
useEffect(()=>{
if(cartItems){
    cartItems.map(item=>{
cartIds.push(item.id)
    })
}
},[cartItems])



useEffect(()=>{

    if(check==true){
        cartItems.map(item=>{
            if(item.id==product.id){
                return item.quantity=productQuantity
            }
        })
        setTimeout(()=>{
            setCheck(false)
navigation.navigate('Checkout')
 
        },2000)
    }


},[check])


const UpdateProductQuantity=(a)=>{
   
if(a=='add'){
    setProductQuantity(productQuantity + 1)
    setProduct({...product,quantity:productQuantity+1})
    
}

if(a=='remove' && productQuantity!=1){
    setProductQuantity(productQuantity - 1)
    setProduct({...product, quantity:productQuantity-1})
}

else{}
}



const AddtoCart=()=>{

   
if(cartItems && cartItems.length > 0){
   

    
  if(cartIds.includes(product.id)){
   
    
    setCheck(true)
   
  }

  


  else{
    setData(productQuantity)
    setCartItems([...cartItems,product])
    navigation.navigate('Checkout')   
  }

}
    else{
        if(cartItems==''){

        setData(productQuantity)
  setCartItems([...cartItems,product])
  navigation.navigate('Checkout')
  
        }
    }
      
            
    
    
}




  return (
    
    <View style={styles.container}  > 
{check==true &&<View>
<Text style={{color:'green'}}>
Item already in Cart,quantity has been updated
</Text>
</View>}



    {/*beginning of product View*/}
    <View style={{backgroundColor:'white'}} >
      

      <Image style={{width:120,height:90}}  
      source={{uri:product.url}} /> 
      <Text>{product.title}</Text>
      <Text style={{color:'tomato'}}>${product.price}</Text>
      </View>
 {/*end of product View*/}



 {/*beginning of  addtocart View*/}
      <View>

      <View style={styles.addtoCart}>
      <Button onPress={()=>UpdateProductQuantity('remove')} title='-'/>
      <Button title={productQuantity}/>
      <Button onPress={()=>UpdateProductQuantity('add')} title='+'/>
      </View>

      <Button title='Add to Cart' onPress={AddtoCart}/>
      
      </View>
     {/*end of  addtocart View*/}
     


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
       
        width:100,
       color:'blue'
    },
    addtoCart:{
        width:100,
        display:'flex',
        flexDirection:'row',
        margin:5

    }
});