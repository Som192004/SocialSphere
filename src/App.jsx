import './App.css'
import "bootstrap/dist/css/bootstrap.min.css" ;
import Header from './components/Header';
import MainHome from './components/MainHome'
import About from './components/About'
import Features from './components/Features'


import { Route,  Routes } from 'react-router-dom';

function App() {

  return ( <>

    <Header></Header>

    <Routes>
      <Route path = '/Home' element={<MainHome />} />
      <Route path = '/about' element={<About/>} />
      <Route path = '/features' element={<Features/>} />

    </Routes>
    </>
  );
}

export default App;
