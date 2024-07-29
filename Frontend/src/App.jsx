
import "bootstrap/dist/css/bootstrap.min.css" ;
import Header from './components/Header';
import MainHome from './components/MainHome'
import About from './components/About'
import Features from './components/Features'
import { useState } from 'react';
import { useEffect } from 'react';
import { Route,  Routes } from 'react-router-dom';
import SignUp from './components/SignUp' ; 
import Login from './components/Login' ; 
import SplashScreen from './components/SplashScreen';
import Profile from './components/Profile';
import './App.css'


function App() {

  const [loading, setLoading] = useState(true);
  

  let token = localStorage.getItem('token') ;
    const [tokenState , settokenState] = useState(token) ;

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data, loading resources)
    setTimeout(() => {
      setLoading(false); // Set loading to false after some time (e.g., 3 seconds)
    }, 3000); // Adjust timing as needed
  }, []);

  return ( 
  <div className="app">

{loading ? (
        <SplashScreen />
      ) :  <div className="main-content">

    <Header tokenState = {tokenState} settokenState = {settokenState}></Header>

    <Routes>
      <Route path = '/' element={<MainHome tokenState = {tokenState} settokenState = {settokenState} />} />
      <Route path = '/Home' element={<MainHome tokenState = {tokenState} settokenState = {settokenState}/>} />
      <Route path = '/about' element={<About tokenState = {tokenState} settokenState = {settokenState}/>} />
      <Route path = '/features' element={<Features tokenState = {tokenState} settokenState = {settokenState}/>} />
      <Route path='/signup' element={<SignUp tokenState = {tokenState} settokenState = {settokenState}/>} />
      <Route path='/signin' element={<Login tokenState = {tokenState} settokenState = {settokenState} />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>

    </div>
}
    </div>
  );
}

export default App;
