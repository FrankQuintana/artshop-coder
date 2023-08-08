import React, {useState} from 'react'
import "./navBar.css"
import CartWidget from '../CartWidget';

export const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
      <div className='container'>
        <nav className='nav'>
          <a className='nav-logo' href='#' onClick={closeMenu} >ART-SHOP</a>
          <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'bi bi-x' : 'bi bi-list'} />
          </div>
  
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a className='nav-link' href='#' onClick={closeMenu}>Inicio</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' onClick={closeMenu}>Geometricos</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' onClick={closeMenu}>Mafia</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' onClick={closeMenu}>Abstractos</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' onClick={closeMenu}><CartWidget /></a>
            </li>
          </ul>
          
        </nav>
      </div>
  )
}

export default NavBar