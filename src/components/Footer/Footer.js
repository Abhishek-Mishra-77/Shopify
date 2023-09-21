import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer py-5 bg-dark'>
      <div className='container'>
        <div className='footer-content text-white grid'>
          <div className='footer-item text-center'>
            <h6 className='fs-17 fw-6'>Links</h6>
            <ul>
              <li>
                <a href='/about' className='fs-15'>About Us</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Contact</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Blog</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>FAQ's</a>
              </li>
            </ul>
          </div>
          <div className='footer-item text-center'>
            <h6 className='fs-17 fw-6'>Policies</h6>
            <ul>
              <li>
                <a href='/about' className='fs-15'>Terns & Conditions</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Cookies</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Data Policy</a>
              </li>
            </ul>
          </div>
          <div className='footer-item text-center'>
            <h6 className='fs-17 fw-6'>About Shopping Club</h6>
            <ul>
              <li>
                <a href='/about' className='fs-15'>Company Info</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Contact</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Branches</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Store</a>
              </li>
            </ul>
          </div>
          <div className='footer-item text-center'>
            <h6 className='fs-17 fw-6'>Contact</h6>
            <ul>
              <li>
                <span>
                  <i className='fas fa-phone'></i>
                  <span className='fs-15'>+59355 54554</span>
                </span>
              </li>
              <li>
                <span>
                  <i className='fas fa-phone'></i>
                  <span className='fs-15'>+59355 54554</span>
                </span>
              </li>
              <li>
                <span>
                  <i className='fas fa-envelope'></i>
                  <span className='fs-15'>info@shopclub.com</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer