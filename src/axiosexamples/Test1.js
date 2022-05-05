import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios';
//import data1 from './db.json';
import {ScrollView,Text, StyleSheet,View} from 'react-native';

export default function Test() {
const[user,setUser]=useState([]);
// const data1 = [{
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// }]
 useEffect(()=>
   {
    //  axios.get('https://jsonplaceholder.typicode.com/users')
    //  .then(res=>setUser(res.data))
    //  axios.post('https://jsonplaceholder.typicode.com/users',{data1})
    //  .then(res=>setUser(res.data.data1))
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>setUser(res.data))

   },[]
 )

  return (
    <ScrollView style={{flex: 1}}>
     {user.map((u, index)=>
     (
       <View style={styles.container} key={index}>
        <Text style={{color: 'blue', textAlign: 'center'}}>{u.address.city},</Text>
       </View>
     )
     )
     }
    </ScrollView>
  )
  }

  // these two methods used to fetch the API data
  //using fetch also get the datas
  //and axios library also to get the datas

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'pink',
    }
  })
