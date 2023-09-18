import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import logo from "../img/logo.png";

const NavBar = () => {
  const [click, setClick] = useState(false);

  // const scrollTo = (id) => {
  //   let element = document.getElementById(id);

  //   element.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "nearest",
  //   });

  //   setClick(!click);
  // };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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

            <Link to="/ourcause">
              <li> Our Cause </li>
            </Link>

            <Link to="/team">
              <li> Team </li>
            </Link>

            <Link to="/whatwedo">
              <li> What We Do </li>
            </Link>

            <Link to="/podcast">
              <li> Podcast </li>
            </Link>

            <Link to="/contact">
              <li> Contact Us </li>
            </Link>
          </ul>
        </div>

        <div className="desktop">
          <div className="btn" style={{ padding: "0px" }}>
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                padding: "15px",
                fontWeight: "bold",
                fontSize: "16px",
                textTransform: "capitalize",
                borderRadius: "8px",
                width: "100%",
                boxShadow: "none",
              }}
            >
              Donate
            </Button>
          </div>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <a href="https://paystack.com/pay/penielday" target="blank">
              <Typography sx={{ py: 1, px: 2 }}>One-off donation</Typography>
            </a>
            <a href="https://paystack.com/pay/qzu-t18m13" target="blank">
              <Typography sx={{ py: 1, px: 2 }}>Recurring donation</Typography>
            </a>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
