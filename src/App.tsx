import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      {/* <Footer />} */}
    </>
  );
};

export default App;
