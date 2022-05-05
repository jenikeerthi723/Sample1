import React from 'react'
import {useEffect,useState} from 'react';



export default function Test() {
const[user,setUser]=useState([]);
 useEffect(()=>
   {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(res=>console.log(res))

   }
 )

  return (
    <div>
     {user.map(u=>(
       <div>
         {u.address.geo.lat}{u.name}
         </div>
     ))}
    </div>
  )
  }


  //using fetch also get the datas
  //and axios library also to get the datas