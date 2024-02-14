import "./Footer.css";
import { Link } from "react-router-dom";

import twitterIcon from "../assets/icons/twitter-icon.svg";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import WhiteLemonLogo from "../assets/icons/monochrome-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <img src={WhiteLemonLogo} alt="White Little Lemon logo" />
        <section className="sitemap">
          <h4>Sitemap</h4>

          <li><Link to="/" className="footerItem">Home</Link></li>
          <li><Link to="/about" className="footerItem">About</Link></li>
          <li><Link to="/menu" className="footerItem">Menu</Link></li>
          <li><Link to="/reservations" className="footerItem">Reservations</Link></li>
          <li><Link to="/order" className="footerItem">Order Online</Link></li>
          <li><Link to="/login" className="footerItem">Login</Link></li>
        </section>

        <section className="contactUs">
          <h4>Contact Us</h4>
          <p>678 Pisa Ave, Chicago, IL 60611s</p>
          <p>customer@littlelemon.com</p>
          <p>+1 (312) 123-4567</p>
        </section>

        <section className="social">
          <h4>Social Media</h4>
          <img src={twitterIcon} alt="Twitter icon" />
          <img src={instagramIcon} alt="Instagram icon" />
          <img src={facebookIcon} alt="Facebook icon" />
        </section>
      </div>
    </footer>
  )
}

export default Footer;
