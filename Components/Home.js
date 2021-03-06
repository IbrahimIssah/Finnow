import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity,ScrollView } from 'react-native';
import axios from 'axios'
import { dataContext } from './dataContext';



export default function Home({navigation}) {

  const{product_}=useContext(dataContext)
  const[product,setProduct]=product_
  const[check,setCheck]=useState(false)
const[data,setData]=useState([])

  


useEffect( async()=>{
    
  {/* fetching product data from server*/}
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
   {/*mapping through product data from server */}
      { data &&
        data.map(item=>{
          return(
            <View style={{margin:5,backgroundColor:'white'}}>
            <TouchableOpacity onPress={()=>{
              setProduct(item)
navigation.navigate('Item')
            }}>
            <Image style={{width:95,height:95,maxWidth:95}}  
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
    display:'flex',
    flexDirection:'column',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey', 
    }
});
