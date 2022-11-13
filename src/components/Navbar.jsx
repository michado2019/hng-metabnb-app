import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: "none",
    color: "red",
    transition: "all 0.5s",
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none" }
      }
      to={to}
      end
      {...props}
    />
  );
};

export default function Navbar() {
  return (
    <div className="navbarWrapper">
      <img src="images/Vector.png" alt="logo" className="logo" />
      <h2 className="logoText">
        <span id="logoText1">Me</span>
        <span id="logoText2">ta</span>
        <span id="logoText3">bnb</span>
      </h2>
      <div className="navLinks">
        <CustomNavLink to="/" className='navLinksTexts'>Home</CustomNavLink>
        <CustomNavLink to="/stay" className='navLinksTexts'>Place to stay</CustomNavLink>
        <CustomNavLink to="/nfts" className='navLinksTexts'>NFTs</CustomNavLink>
        <CustomNavLink to="/community" className='navLinksTexts'>Community</CustomNavLink>
      </div>
      <div className="connectWallet-div">
        <button className="connectWallet-btn">Connect wallet</button>
      </div>
    </div>
  );
}