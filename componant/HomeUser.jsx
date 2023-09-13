import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom'

const HomeUser = () => {

    const [members, setMembers] = useState([])
    const [reload,setReload] = useState(!true);

    useEffect(()=>{
        const getData = async () => {
        const response = await axios.get('https://jsd5-mock-backend.onrender.com/members')
            setMembers(response.data)
        }
        getData();
    },[reload]); 

  return (
    <div>        
        <Navbar />
        <div className='text-header'>
            <h1>Generation Thailand <br/> React-User Sector</h1>
            <Link to="/userhome">
            <button>User Home Sector</button>
            </Link>
            <Link to="/adminhome">
            <button>Admin Home Sector</button>
            </Link>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {members.map((item) => (
                <tr key={item.id}>                        
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.position}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default HomeUser