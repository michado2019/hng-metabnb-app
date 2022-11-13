import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, ...props }) => {
    let activeStyle = {
      textDecoration: 'underline',
      color: 'red',
      transition: 'all 4s',
    };
  
    return (
      <NavLink
        style={({ isActive }) =>
          isActive ? activeStyle : { textDecoration: 'none' }
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
      <img src="" alt="logo" className="logo" />
      <h2 className="logoText">Metabnb</h2>
      <div className="navLinks">
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/stay">Place to stay</CustomNavLink>
        <CustomNavLink to="/nfts">NFTs</CustomNavLink>
        <CustomNavLink to="/community">Community</CustomNavLink>
      </div>
      <div className="connectWallet-div">
        <button className="connectWallet-btn">Connect wallet</button>
      </div>
    </div>
  );
};
