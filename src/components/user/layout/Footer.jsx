import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import insta from "../../../assets/icons/insta.svg";
import facebook from "../../../assets/icons/facebook.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import logoWhite from "../../../assets/logo_white.svg";
const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer_container">
        <div className="col_container_1">
          <div className="footer_col_1">
            <img src={logoWhite} className="logo_footer" />
            <p>Made by maid service owners.</p>
            <p className="footer_col_1_service">
              We exist to help maid service owners simplify, automate and grow
              their cleaning business.
            </p>
            <div className="social_links">
              <img src={facebook} className="footer_social_icon" />
              <img src={linkedin} className="footer_social_icon" />
              <img src={insta} className="footer_social_icon" />
            </div>
          </div>
        </div>
        <div className="col_container_2">
          <div className="footer_col_2">
            <p className="footer_link_title">Free resources</p>
            <Link className="footer_link">
              Many of the Keywords Every Maid Service Know
            </Link>
            <Link className="footer_link">
              Ads to Increase your cleaning TODAY
            </Link>
            <Link className="footer_link">
              5 Free Tools we used to Grow Fast Friendly Spotless.
            </Link>
          </div>
          <div className="footer_col_3">
            <p className="footer_link_title">Useful Links</p>
            <Link className="footer_link">About Us</Link>
            <Link className="footer_link">Pricing</Link>
            <Link className="footer_link">Testimonials</Link>
            <Link className="footer_link">Contact Us</Link>
            <Link className="footer_link">Privacy Policy</Link>
          </div>
          <div className="footer_col_4">
            <p className="footer_link_title">Social Media</p>
            <Link className="footer_link">Facebook</Link>
            <Link className="footer_link">Instagram</Link>
            <Link className="footer_link">Linkedin</Link>
            <Link className="footer_link">Youtube</Link>
          </div>
        </div>
      </div>
      <div className="footer_copy">© 2024 STRIDE Inc.</div>
    </div>
  );
};

export default Footer;
