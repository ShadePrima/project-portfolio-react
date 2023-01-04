import { NavLink } from 'react-router-dom';

import './style.css';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <NavLink to='/' className='logo'>
            <strong>My</strong> portfolio
          </NavLink>

          <button className='dark-mode-btn'>
            <img src={sun} alt='Light-mode' className='dark-mode-btn__icone' />
            <img src={moon} alt='Dark-mode' className='dark-mode-btn__icone' />
          </button>

          <ul className='nav-list'>
            <li className='nav-list__item'>
              <NavLink to='/' className='nav-list__link nav-list__link--active'>
                Projects
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink to='/skills' className='nav-list__link'>
                Skills
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink to='/contacts' className='nav-list__link'>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
