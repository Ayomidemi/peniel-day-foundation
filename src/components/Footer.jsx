import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-banner">
        <h1>Be part of making a difference.</h1>
        <p>Shining the light of Jesus through adolescentsin Nigeria.</p>

        <Link to="volunteer">
          <button className="footer-button">Volunteer</button>
        </Link>
      </div>

      <div className="footer-container">

        {/* MOBILE VIEW */}
        {/* MOBILE VIEW */}

        <div className="footer-mobile">

          <div className="footer-mobile-first-section">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Peniel Day" />
              </Link>
            </div>

            <p>Shining the light of Jesus through adolescents in Nigeria.</p>
          </div>

          <div className="footer-mobile-second-seec">
            <h3>Be part of making a difference.</h3>
        <Link to="volunteer">
          <button className="footer-button">Volunteer</button>
        </Link>
          </div>

        <div className="mobile-links"> 
          <Link to="/">HOME </Link>
        <Link to="whatwedo">PROGRAMS </Link>
        <Link to="contact">CONTACT </Link>
        </div>

        <div className="footer-mobile-icons">
              <a href="https://www.facebook.com/PenielDayFoundation/">
                <Facebook className="icons" />
              </a>

              <a href="https://www.instagram.com/penielday/">
                <Instagram className="icons" />
              </a>

              <a href="https://twitter.com/PenielDay">
                <Twitter className="icons" />
              </a>

              <a href="https://www.youtube.com/channel/UCwE5wfv3rwMTAkN74UMWFNw/channels">
                <YouTube className="icons" />
              </a>
            </div>
        
        </div>

        {/* DESKTOP VIEW */}
        {/* DESKTOP VIEW */}

        <div className="footer-items">
          <div className="footer-left">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Peniel Day" />
              </Link>
            </div>

            <p>Shining the light of Jesus through adolescents in Nigeria.</p>

            <div className="footer-icons">
              <a href="https://www.facebook.com/PenielDayFoundation/">
                <Facebook className="icons" />
              </a>

              <a href="https://www.instagram.com/penielday/">
                <Instagram className="icons" />
              </a>

              <a href="https://twitter.com/PenielDay">
                <Twitter className="icons" />
              </a>

              <a href="https://www.youtube.com/channel/UCwE5wfv3rwMTAkN74UMWFNw/channels">
                <YouTube className="icons" />
              </a>
            </div>
          </div>

          <div className="footer-middle">
            <div className="list-title">contact us</div>
            <div className="lit">
            <FontAwesomeIcon icon={faPhone} className="icons-middle"/>
               +234 (0) 703 111 0531{" "}
            </div>
            <div className="lit">
            <FontAwesomeIcon icon={faEnvelope} className="icons-middle"/>
               light@penielday.org{" "}
            </div>
            <div className="lit">
            <FontAwesomeIcon icon={faLocationDot} className="icons-middle"/>
               Lagos, Nigeria{" "}
            </div>
          </div>

          <div className="footer-right">
            <div className="list-title">Peniel day</div>
            <div className="list-right">
              <div className="list">
                <Link to="/">HOME </Link>
              </div>
              <div className="list">
                <Link to="ourcause"> ABOUT US </Link>{" "}
              </div>
              <div className="list">
                {" "}
                <Link to="whatwedo">PROGRAMS </Link>
              </div>
              <div className="list">
                {" "}
                <Link to="volunteer"> VOLUNTEER </Link>{" "}
              </div>
              <div className="list">
                {" "}
                <a href="https://paystack.com/pay/penielday"> DONATION </a>
              </div>
              <div className="list">
                <Link to="contact"> CONTACT US </Link>{" "}
              </div>
            </div>
          </div>
        </div>
  
        <div className="bottom">
          <span>
            &copy; {new Date().getFullYear()} Peniel Day. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
