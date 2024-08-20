import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <div className="navbar-brand">
              <img src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg' alt='...' style={{width:'100px', height:'30px'}}/>
            </div>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">Gallery</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Category">Category</Link>
              </li>
        </ul>
            
                <Link className="nav-link" to="/Register">Register</Link>
             
                <Link className="nav-link" to="/Login">Login</Link>
             

        </div>
      </nav>
    </div>
  )
}

export default Navbar