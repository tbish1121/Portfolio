import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import Navbar from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="work" element={<Work />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
