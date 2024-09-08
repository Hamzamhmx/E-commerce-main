import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg"
import { NavStyle } from './componentStyle'

export const Nav = () => {
  let [menuIcon, setMenuIcon] = useState()

  return (
    <NavStyle>
      <div className={menuIcon ? 'navbar active' : 'navbar'}>
        <ul className='navbar-lists'>
          <li>
            <NavLink to="/" onClick={() => setMenuIcon(false)} className="navbar-link home-link">Home </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuIcon(false)} className="navbar-link ">About </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={() => setMenuIcon(false)} className="navbar-link ">Products </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuIcon(false)} className="navbar-link ">Contact </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link"> <FiShoppingCart className='cart-trolley' />
              <span className='cart-total--item'>10</span>
            </NavLink>
          </li>
        </ul>
        <div className='mobile-navbar-btn'>
          <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={() => setMenuIcon(true)} />
          <CgClose name="close-outline" className="mobile-nav-icon close-outline" onClick={() => setMenuIcon(false)} />
        </div>
      </div>
    </NavStyle>
  )
}
