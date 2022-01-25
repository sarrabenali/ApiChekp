import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"

const Profile = () => {
    const { id } = useParams();
     const[user, setUser] = useState({})
    useEffect (() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
        .then((res) => setUser(res.data[0]))
        .catch((err) => console.log(err));
    }, []);

  return (
  <div>

      <h1>Profile</h1>

  </div>
  )
}

export default Profile
