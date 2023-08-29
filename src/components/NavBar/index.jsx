import React, {useState} from 'react'
import "./navBar.css"
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
      <div className='container'>
        <nav className='nav'>
          <NavLink className='nav-logo' to='/' onClick={closeMenu} >ÄRT-SHÖP</NavLink>
          <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'bi bi-x' : 'bi bi-list'} />
          </div>
  
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/' onClick={closeMenu}>Inicio</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/categoria/geometricos' onClick={closeMenu}>Geometricos</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/categoria/cartoon' onClick={closeMenu}>Cartoon</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/categoria/abstractos' onClick={closeMenu}>Abstractos</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/cart' onClick={closeMenu}><CartWidget /></NavLink>
            </li>
          </ul>
          
        </nav>
      </div>
  )
}

export default NavBar