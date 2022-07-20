import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerRow">
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Directions</p>
          <p>Blog</p>
          <p>Learn More</p>
        </div>
        <div className="footerRow">
          <p>Press Releases</p>
          <p>Product Manual</p>
          <p>Product Registration</p>
          <p>HeadQuarters</p>
          <p>Partners</p>
        </div>
        <div className="footerRow">
          <p>Mobile Apps</p>
          <p>Downloads</p>
          <p>Developers</p>
          <p>Site Map</p>
          <p>Investors</p>
        </div>
      </div>
      <div className="footerIcon">
        <Box
          sx={{
            padding: 2,
          }}
        >
          <FacebookIcon className="material-icons md-24" />
        </Box>

        <Box
          sx={{
            padding: 2,
          }}
        >
          <InstagramIcon />
        </Box>
        <Box
          sx={{
            padding: 2,
          }}
        >
          <TwitterIcon />
        </Box>
      </div>
    </div>
  );
}

export default Footer;
