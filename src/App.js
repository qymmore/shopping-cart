import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
