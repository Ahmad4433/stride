import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const Hero = () => {
  return (
    <div className="hero_main">
      <div className="hero_backdrop">
        <div className="hero_content">
          <p className="hero_heading">
            Automate, simplify and grow your service
          </p>
          <p className="hero_sub_heading">
            With STRIDE, the <span>easiest-to-use</span> maid scheduling
            software
          </p>
          <p className="hero_description">
            Discover how you’ll clean more homes and make more money than ever
            before… especially if you're no longer the one cleaning!
          </p>

          <Button
            varient="outline"
            size="1.1rem"
            radius="18px"
            width="220px"
            clr="white"
            shadow={true}
          >
            Get started for free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
