import './Nav.css';
import hamburgerIcon from "../assets/icons/hamburgerIcon.svg"
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="navLinks">
        <li><NavLink to="/" className="navItem">Home</NavLink></li>
        <li><NavLink to="/about" className="navItem">About</NavLink></li>
        <li><NavLink to="/menu" className="navItem">Menu</NavLink></li>
        <li><NavLink to="/reservations" className="navItem">Reservations</NavLink></li>
        <li><NavLink to="/order" className="navItem">Order Online</NavLink></li>
        <li><NavLink to="/login" className="navItem">Login</NavLink></li>
      </ul>

      <img src={hamburgerIcon} alt="hamburger icon" className="hamburgerIcon" />
    </nav>
  )
}

export default Nav;
