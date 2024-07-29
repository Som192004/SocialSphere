// SplashScreen.jsx
import React from 'react';
import './SplashScreen.css'; // Import your CSS for styling
import SocialSphereLogo from '../assets/SocialSphereLogo.jpg'; 
function SplashScreen() {
  return (
    <div className="splash-screen">
      {/* Your animation or image goes here */}
      <img  src={SocialSphereLogo} alt="Social Sphere Image"
      style={{ width: '95%', height: '90%' }}  />
    </div>
  );
}

export default SplashScreen;
