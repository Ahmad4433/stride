import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo_header_d.svg";
import Button from "../../ui/Button";
const Header = () => {
  return (
    <div className="header_main">
      <div className="header_desktop">
        <div className="header_logo_section">
          <Link to="/">
            <img src={logo} className="header_logo" />
          </Link>
        </div>
        <div className="header_menus">
          {headerMenu().map((item, index) => {
            return (
              <div key={index} className="menu_link_container">
                <Link to={item.to} className="header_menu_link">
                  {item.title}
                </Link>
                <div className="menu_link_bar"></div>
              </div>
            );
          })}

          <Button clr="white" radius="0.4rem">
            Get started for free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

function headerMenu() {
  return [
    { title: "Home", to: "/" },
    { title: "Your Pricing", to: "/pricing" },
    { title: "How It Works", to: "/work" },
    { title: "Who uses STRIDE?", to: "/use" },
    { title: "Login", to: "/login" },
  ];
}
