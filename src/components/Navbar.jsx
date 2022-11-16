import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  ArrowForwardIos,
  CancelOutlined,
  MenuOutlined,
} from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  height: "326px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  padding: "15px 25px",
};
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

const navLinkStyles = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  marginTop: "225px",
  borderRadius: "8px",
  marginLeft: "50%",
  width: "150px",
  backgroundColor: "#d7d7d7",
};
export default function Navbar() {
  //States
  const [navStyles, setNavStyles] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Handle Wallet close
  const handleWalletCancel = () => {
    setOpen(false);
  };

  //Handle navLinks
  const handleNavbarDisplay = (e) => {
    e.preventDefault();
    setNavStyles((prevState) => !prevState);
  };
  return (
    <div className="navbarWrapper">
      <img src="images/Vector.png" alt="logo" className="logo" />
      <h2 className="logoText">
        <span id="logoText1">Me</span>
        <span id="logoText2">ta</span>
        <span id="logoText3">bnb</span>
      </h2>
      <div className="navLinks" style={navStyles ? navLinkStyles : {}}>
        <CustomNavLink to="/" className="navLinksTexts">
          Home
        </CustomNavLink>
        <CustomNavLink to="/stay" className="navLinksTexts">
          Place to stay
        </CustomNavLink>
        <CustomNavLink to="/nfts" className="navLinksTexts">
          NFTs
        </CustomNavLink>
        <CustomNavLink to="/community" className="navLinksTexts">
          Community
        </CustomNavLink>
      </div>
      {
        navStyles ? 
      <CancelOutlined className="menuIcon" onClick={handleNavbarDisplay}/> :
      <MenuOutlined className="menuIcon" onClick={handleNavbarDisplay} />  
      }
      <div className="connectWallet-div">
        <button className="connectWallet-btn" onClick={handleOpen}>
          Connect wallet
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="walletTop-flex">
              <h4 className="walletTitle">Connect Wallet</h4>
              <CancelOutlined
                className="walletCancel"
                onClick={handleWalletCancel}
              />
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="walletSub-title">Choose your preferred wallet:</p>
            <div className="walletPreferred">
              <img
                src="images/image 66 (1).png"
                alt="wallet"
                className="walletPreferred-img"
              />
              <h5>Metamask</h5>
              <ArrowForwardIos className="walletArrow" />
            </div>
            <div className="walletPreferred">
              <img
                src="images/image 69.png"
                alt="wallet"
                className="walletPreferred-img"
              />
              <h5>Connect Wallet</h5>
              <ArrowForwardIos className="walletArrow" />
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
