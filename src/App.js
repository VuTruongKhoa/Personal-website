import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import bootstrap from 'bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
