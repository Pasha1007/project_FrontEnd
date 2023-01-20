import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header2 from './components/Header2';
import Header1 from './components/Header1';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    
      
    <div className="App">
      <Header1/>
      <Header2/>
      <Footer/>
    <Routes>
         <Route exact path='/' element={<HomePage/>}/>
         <Route exact path='/login' element={<LoginPage/>}/>
         <Route exact path='/register' element={<RegisterPage/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
