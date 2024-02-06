import "./Footer.css";

import twitterIcon from "../assets/icons/twitter-icon.svg";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import WhiteLemonLogo from "../assets/icons/monochrome-logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={WhiteLemonLogo} alt="White Little Lemon logo" />
      <section className="sitemap">
        <h4>Sitemap</h4>

        <p>Home</p>
        <p>About</p>
        <p>Menu</p>
        <p>Reservations</p>
        <p>Order Online</p>
        <p>Login</p>
      </section>
      <section className="contactUs">
        <h4>Contact Us</h4>
        <p>678 Pisa Ave, Chicago, IL 60611s</p>
        <p>customer@littlelemon.com</p>
        <p>+1 (312) 593-2744</p>
      </section>
      <section className="social">
        <h4>Social Media</h4>
        <img src={twitterIcon} alt="Twitter icon" />
        <img src={instagramIcon} alt="Instagram icon" />
        <img src={facebookIcon} alt="Facebook icon" />
      </section>
    </footer>
  )
}

export default Footer;
