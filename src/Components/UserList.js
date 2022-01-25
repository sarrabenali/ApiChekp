import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import '../App.css'
const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect (() => {
        axios 
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err));
    }, []);

  return (
  <div className='UserList'>
    {users.map((users) =>(<UserCard user= {users} key={users.id} />))}
  </div>
  )
  
}

export default UserList
