import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
//import ContactsTest from './src/ContactsTest';
//import ImagePickerTest from './src/ImagePickerTest';
//import Test1 from './src/axiosexamples/Test1'
i//mport Test3 from './src/axiosexamples/Test3';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <ContactsTest/> */}
     <ImagePickerTest/>
     {/* <Test3/> */}
     {/* <Text>hi</Text> */}
     <Text>
       ji
     </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
})