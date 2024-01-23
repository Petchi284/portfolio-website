import React, { useState } from "react";
import "../Navbar/Nav.css";
import logo from "../../assets/logopage.jpg";
import { Link } from "react-scroll";
import menu from "../../assets/menu.jpg";

const Nav = () => {
  const [showMenu, setShowmenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopmenu">
        <Link
          activeClass="active"
          to="navbar"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listitem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listitem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="listitem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="por"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listitem"
        >
          Portfolio
        </Link>
      </div>
      <button
        className="desktopmenubtn"
        onClick={() => {
          const contactPageElement = document.getElementById("contact");
          if (contactPageElement) {
            contactPageElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Contact Me
      </button>

      <img
        src={menu}
        alt="menu"
        className="mobilemenu"
        onClick={() => setShowmenu(!showMenu)}
      />
      <div className="navmenu" style={{ display: showMenu ? `flex` : `none` }}>
        <Link
          activeClass="active"
          to="navbar"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menulistitem"
          onClick={() => setShowmenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menulistitem"
          onClick={() => setShowmenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="menulistitem"
          onClick={() => setShowmenu(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="por"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menulistitem"
          onClick={() => setShowmenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menulistitem"
          onClick={() => setShowmenu(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
