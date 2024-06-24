import React from "react";
import "./magzine.css";
import Button from "../../ui/Button";
import magzine1 from "../../../assets/magzine1.png";
import magzine2 from "../../../assets/magzine2.png";
import magzine3 from "../../../assets/magzine3.png";
import arrowTiltcolor from "../../../assets/icons/arrow_tilt_color.svg";
import arrowtilt from "../../../assets/icons/arrow_tilt_white.svg";
const Magzine = () => {
  return (
    <div className="magzine_main">
      <p className="magzine_title_page">
        Best meditations from the STRIDE Magazine
      </p>
      <div className="magzine_container">
        {getMagzine().map((item, index) => {
          return (
            <div key={index} className="magzine">
              <div className="magzine_image">
                <img src={item.img} className="magzine_img" />
              </div>
              <p className="magzine_title">{item.title}</p>
              <p className="magzine_detail">{item.detail}</p>
              <div className="magzine_article">
                <span>Read Article</span>
                <img src={arrowtilt} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="magzine_more_action">
        <Button radius="18px" varient="outline" clr="#177A75" width="160px">
          <span> Read More</span>
          <img className="arrow_tilt_magzine" src={arrowTiltcolor} />
        </Button>
      </div>
    </div>
  );
};

export default Magzine;

function getMagzine() {
  return [
    {
      title:
        "How STRIDE helped Mindy DeShields triple her Maid Service revenue",
      detail:
        "Learn how STRIDE and Debbie Sardone’s Cleaning Business Fundamentals course changed this maid service owner’s life and helped her build a 6 figure maid service!",
      img: magzine1,
    },
    {
      title:
        "Scale Your Cleaning Business: Save 25+ Hours a Week on Marketing, Scheduling and Hiring",
      detail:
        "Learn the 3 pillars that every maid service owner must know in order to scale your cleaning business and save 25+ hours a week.",
      img: magzine2,
    },
    {
      title:
        "How to Get Clients for Your Cleaning Business: 20 Marketing Ideas",
      detail:
        "Learn how to get cleaning business clients. We’ve got 20 ways to market your maid service that’ll have you booked solid in no time. Click through and get busy!",
      img: magzine3,
    },
  ];
}
