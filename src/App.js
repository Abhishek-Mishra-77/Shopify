import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import CardPage from './pages/CardPage/CardPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import NavBar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LoginPage from './pages/Authentication/LoginPage';
import ForgetPassword from './pages/Authentication/ForgetPassword';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/category:id' element={<CategoryPage />} />
          <Route path='/cart' element={<CardPage />} />
          <Route path='/auth' element={<LoginPage />} />
          <Route path='/forget' element={<ForgetPassword />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
