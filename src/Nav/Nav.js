import './Nav.css';
import hamburgerIcon from "../assets/icons/hamburgerIcon.svg"

const Nav = () => {
  return (
    <nav>
      <ul className="navLinks">
        <li><a href='/'>Home</a></li>
        <li><a href='https://www.google.com'>About</a></li>
        <li><a href='/'>Menu</a></li>
        <li><a href='/'>Reservations</a></li>
        <li><a href='/'>Order Online</a></li>
        <li><a href='/'>Login</a></li>
      </ul>

      <img src={hamburgerIcon} alt="hamburger icon" className="hamburgerIcon" />
    </nav>
  )
}

export default Nav;
