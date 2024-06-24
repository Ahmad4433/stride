import React from "react";
import "./explore.css";
import arrowTilt from "../../../assets/icons/arrow_tilt.svg";
import Button from "../../ui/Button";
const Explore = () => {
  return (
    <div className="explore_main">
      <div className="explor_container">
        <p>The stressless way to run your cleaning business…</p>
        <p>
          Many of maid service owners have already made the switch to{" "}
          <span>STRIDE!</span>
        </p>
        <Button width="180px" clr="white" radius="18px">
          <span>Explore More</span>
          <img src={arrowTilt} className="arrow_tilt" />
        </Button>
      </div>
    </div>
  );
};

export default Explore;
