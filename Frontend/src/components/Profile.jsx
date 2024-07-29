import React from "react";
import './profile.module.css'
import userProfile from '../assets/userProfile.jpg'

const Profile = () => {

  const user = JSON.parse(localStorage.getItem('user')) ;

  if(!user){
    return <>
      <center>
        <h3>Please Login First</h3>
      </center>
    </>
  }

  return (
     (
     <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
   <div class="card p-4">
   <div class=" image d-flex flex-column justify-content-center align-items-center">
      <button class="btn btn-secondary"> <img src={userProfile} height="100" width="100" /></button> <span class="name mt-3">{user.name}</span> <span class="idd">{user.email}</span> 
   </div>
     
</div>
</div>
    )
  );
};

export default Profile;


