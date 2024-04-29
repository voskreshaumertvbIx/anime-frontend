import React from 'react';
import './App.css';
import { RegisterPage } from './pages/registerPage/registerPage';
import AppRoutes from './routes';
import { LoginPage } from './pages/loginPage/loginPage';
import {Header} from './pages/header/header';
import { Footer } from './pages/footer/footer';
import  MainPage  from './pages/mainPage/mainPage';



 const  App = () =>{
  return(
    <>
    <Header />
    <main><AppRoutes/></main>
    <Footer/>
    <div className="background_image"></div>
    </>
  );
}

export default App;