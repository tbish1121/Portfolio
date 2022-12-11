import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import Navbar from './components/Header';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="work" element={<Work />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
