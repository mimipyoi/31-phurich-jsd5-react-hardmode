import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const HomeAdmin = () => {

    const [members, setMembers] = useState([]);
    const [name, setName] = useState([]);
    const [lastname, setLastname] = useState([]);
    const [position, setPosition] = useState([]);
    const [reload,setReload] = useState(!true);

    useEffect(()=>{
        const getData = async () => {
        const response = await axios.get('https://jsd5-mock-backend.onrender.com/members')
            setMembers(response.data)
        }
        getData();
    },[reload]); 

    const createData = async (name,lastname,position) => {
        const response = await axios.post("https://jsd5-mock-backend.onrender.com/members",{
            id:uuidv4(),
            name:name,
            lastname:lastname,
            position:position,
            }
        );
        if (response.status === 200){
            console.log('create data ok')
            setName('')
            setLastname('')
            setPosition('')
            setReload(!reload);
        } else {
            console.log('create data error')
        }
    }; 

    const deleteData = async (id) => {
        const response = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`)
        if (response.status === 200 && response.data) {
            setReload(!reload);
        }
        console.log('deleteData',response.status)
    };

    return (
    <div>        
        <Navbar />
        <div className='text-header'>
            <h1>Generation Thailand <br/> React-Admin sector</h1>
            <Link to="/userhome">
            <button>User Home Sector</button>
            </Link>
            <Link to="/adminhome">
            <button>Admin Home Sector</button>
            </Link>
        </div>
        <h4>Create User Here </h4>
        <form action="">
            <input 
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder='Name'
                onChange={(e)=>
                    (setName(e.target.value)
                )}
            />
            <input 
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                placeholder='Last name'
                onChange={(e)=>
                    (setLastname(e.target.value)                       
                )}
                />
            <input 
                type="text"
                name="position"
                id="position"
                value={position}
                placeholder='position'
                onChange={(e)=>
                    (setPosition(e.target.value)
                )}
            />
            <button 
                type='button' 
                id='buttonSave'
                onClick = {()=>
                    createData(name,lastname,position)
                }
            >Save</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {members.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.position}</td>
                    <td>
                        <button onClick={() => deleteData(item.id)} >Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default HomeAdmin