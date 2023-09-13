import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const HomeNormal = () => {
  return (
    <>
        <Navbar />
        <div className='text-header'>
            <h1>Generation Thailand <br/> React-assessment</h1>
            <Link to="/userhome">
            <button>User Home Sector</button>
            </Link>
            <Link to="/adminhome">
            <button>Admin Home Sector</button>
            </Link>
        </div>


    </>
  )
}

export default HomeNormal