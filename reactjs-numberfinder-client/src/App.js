import React from 'react';
import './App.css';
import { Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';

function App() {

  return (
    <>
      <BrowserRouter>

        <nav>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </nav>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes> 
      </BrowserRouter>

    </>
  );
}

export default App;