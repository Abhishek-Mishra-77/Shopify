import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../store/categorySlice';
import { getCartTotal } from '../../store/cartSlice';



const Navbar = () => {
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.category)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { totalItems } = useSelector(state => state.cart);


  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getCartTotal())
  }, [dispatch])


  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <div className='container'>
          <div className='navbar-top flex flex-between'>
            <Link to={'/'} className='navbar-brand'>
              <span className='text-regal-blue'>Shopify</span>
              <span className='text-gold'>Club.</span>
            </Link>

            <form className='navbar-search flex'>
              <input type='text' placeholder='Search here...' />
              <button type='submit' className='navbar-search-btn'>
                <i className='fas fa-search'></i>
              </button>
            </form>
            {/* <div className='navbar-btns'>
              <Link to={'/cart'} className='add-to-cart-btn flex'>
                <span className='btn-ico'>
                  <i className='fas fa-shopping-cart'></i>
                </span>
                <div className='btn-text fw-5'>Cart <span className='cart-count-value'>{totalItems}</span></div>
              </Link>
            </div> */}

            <div className='navbar-botton'>
              <ul className='nav-l flex' >
                <li >
                  <div className='navbar-btns'>
                    <Link to={'/cart'} className='add-to-cart-btn flex'>
                      <span className='btn-ico'>
                        <i className='fas fa-shopping-cart'></i>
                      </span>
                      <div className='btn-text fw-5'>Cart <span className='cart-count-value'>{totalItems}</span></div>
                    </Link>
                  </div>
                </li>
                <li >
                  <div className='navbar-btns'>
                    <Link to={'/auth'} className='add-to-cart-btn flex'>
                      <span className='btn-ico'>
                        <i className='fa fa-sign-in'></i>
                      </span>
                      <div className='btn-text fw-5'>Login<span className='cart-acount'></span></div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='navbar-bottom bg-regal-blue'>
          <div className='container flex flex-between'>
            <ul className={`nav-links flex ${sidebarOpen ? 'show-nav-links' : ''}`}>
              <button type='button' className='navbar-hide-btn text-white'
                onClick={() => setSidebarOpen(false)}>
                <i className='fas fa-times'></i>
              </button>
              {
                categories.map(category => (
                  <li key={category.id}>
                    <Link
                      to={`/category/${category.id}`}
                      className='nav-link text-white'
                      onClick={() => setSidebarOpen(false)}
                    >{category.name}</Link>
                  </li>
                ))
              }
            </ul>

            <button type='button' className='navbar-show-btn text-gold'
              onClick={() => setSidebarOpen(true)}>
              <i className='fas fa-bars'></i>
            </button>

          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar