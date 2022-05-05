import axios from 'axios';
import React from 'react';
import {View} from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';

function Test3(){
 useEffect(()=>
 {
     axios.get("https://jsonplaceholder.typicode.com/photos")
     .then (res = res.json())
     .then (res=>console.log(res));

 }
 )

 return(
     <View style={{flex:1}}> 
         hi
     </View>
 );
 }



export default Test3;