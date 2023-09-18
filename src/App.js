import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage'
import CardPage from './pages/CardPage/CardPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import NavBar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/category:id' element={<CategoryPage />} />
          <Route path='/card' element={<CardPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
