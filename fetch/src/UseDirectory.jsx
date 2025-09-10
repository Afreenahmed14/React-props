import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import UserCard from './UserCard';
const UseDirectory = () => {
    const [users,setusers] = useState([]);
    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=12")
        .then((res) => res.json())
        .then((data) => setusers(data.results));
    },[])
  return (   
<div className="p-6">
  <h1 className="text-3xl font-bold text-center mb-6">Profiles</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {users.map((user, index) => (
      <UserCard key={index} users={user} />
    ))}
  </div>
</div>

      
    
  )
}

export default UseDirectory
