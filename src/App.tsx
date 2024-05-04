import React from 'react';
import './App.css';
import { RegisterPage } from './pages/registerPage/registerPage';
import AppRoutes from './routes';
import { LoginPage } from './pages/loginPage/loginPage';
import { Header } from './pages/header/header';
import { Footer } from './pages/footer/footer';
import MainPage from './pages/mainPage/mainPage';
import firstcollage from './../../img/forcollage/firs_picture_collage.png';
import secondcollage from './../../img/forcollage/second_for_collage.jpg';
import thirdcollage from './../../img/forcollage/third_for_collage.jpg';
import { ToastContainer, Zoom } from 'react-toastify';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <div className="background_image"></div>
    </>
  );
};

export default App;
