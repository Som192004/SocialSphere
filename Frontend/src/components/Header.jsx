import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogOut'  
import { useNavigate } from 'react-router-dom';
import userProfile from '../assets/userProfile.jpg'

const Header = ({tokenState , settokenState}) => {

  const navigate = useNavigate() ;

  const handleOnClick = () => {
    navigate('/profile')
  }
    

    return <>
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:Href="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to = "/Home" className="nav-link px-2 text-white">Home</Link></li>
          <li><Link to="/features" className="nav-link px-2 text-white">Features</Link></li>
          <li><Link to = "/about" className="nav-link px-2 text-white">About</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-light" placeholder="Search..." aria-label="Search"></input>
        </form>

        <div className="text-end">
          <div>
            
            {
                tokenState ? <div><LogoutButton tokenState = {tokenState} settokenState = {settokenState}></LogoutButton> 
                <button onClick={handleOnClick}><img className = "userPic"src={userProfile}></img></button>
                </div>
                : 
                <div>
                <Link to="/signup">
                    <button className="btn btn-outline-light me-2">Sign Up</button>
                </Link>
                <Link to="/signin">
                    <button className="btn btn-outline-light me-2">Login</button>
                </Link>
            </div>

            }
            
          </div>
        
        </div>
      </div>
    </div>
  </header>
    
    </>
}

export default Header ; 