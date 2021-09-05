import React from 'react';
import { StyleSheet,View,} from 'react-native';
import Stack from './Components/stackNavigator';
import {DataProvider } from './Components/dataContext';


export default function App() {

return (
<DataProvider>
    
      <View style={styles.container} >
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
