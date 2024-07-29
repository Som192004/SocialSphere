
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({tokenState , settokenState}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user') ;
    settokenState(!tokenState) ;
    
    navigate('/');
    window.location.reload();
  };

  return <button className="btn btn-outline-light me-2"  onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
