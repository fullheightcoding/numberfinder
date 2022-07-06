import React from 'react';
import { nanoid } from 'nanoid';
import Number from './components/Number';
import Home from './Pages/Home'
import NumberFinder from './Pages/NumberFinder';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ErrorPage from './ErrorPage';

function App() {

  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/numberfinder' element={<NumberFinder/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;