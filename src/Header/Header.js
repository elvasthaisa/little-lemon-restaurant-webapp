import './Header.css';
import Nav from "../Nav/Nav";
import LemonLogo from '../assets/icons/logo.jpg';

const Header = () => {
  return (
    <header className="headerContainer">
      <img src={LemonLogo} alt="Little lemon logo" className="logo" />
      <Nav className="nav" />
    </header>
  )
}

export default Header;
