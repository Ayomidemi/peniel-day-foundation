import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {  
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <div className="navbar" id="navbar">
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Peniel Day" />
          </Link>
        </div>

        <div
          className="hamburger"
          onClick={() => setClick(!click)}
          style={{
            transform: click
              ? "translate(-50%) rotate(90deg)"
              : "translate(-50%) rotate(0)",
          }}
        >
          &nbsp;
        </div>

        <div className="menu" onClick={() => setClick(false)}>
          <ul
            className="men"
            style={{ transform: click ? "translateY(0)" : "translateY(100%)" }}
          >
            <Link to="/">
              <li className="active"> Home </li>
            </Link>

            <Link to="ourcause">
              <li> Our Cause </li>
            </Link>

            <Link to="team">
              <li> Team </li>
            </Link>

            <Link to="whatwedo">
              <li> What We Do </li>
            </Link>

            <Link to="contact">
              <li> Contact Us </li>
            </Link>
          </ul>
        </div>

        <div className="desktop">
          <a href="https://paystack.com/pay/penielday">
            <button className="btn"> Donate</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
