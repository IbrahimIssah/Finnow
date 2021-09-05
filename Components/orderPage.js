import React from 'react';
import { StyleSheet, Text, View} from 'react-native';



export default function OrderPage() {

  return (
    
    <View style={styles.order_}  > 

    <View style={styles.order_View_1} >
    <Text>your Order was Successful</Text>
    </View>
     
    </View>
   
    
  );
}

const styles = StyleSheet.create({
    order_:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'grey',
    },

    order_View_1:{
      maxWidth:100
    }
});