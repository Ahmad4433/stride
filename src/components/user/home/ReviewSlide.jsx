import React from "react";
import "./reviewSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ReviewSlide = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <div className="reviewSlider_main">
      <div className="review_slider_shadow"></div>
      <div className="review_slider_shadow_right"></div>
      <div className="slider_container_review">
        <Slider {...settings}>
          {getReview().map((item, index) => {
            return (
              <div className="review_slider_each">
                <div key={index} className="review_slider_box">
                  <div className="review_user_detail">
                    <div className="review_user_profile"></div>
                    <div className="review_date">
                      <span>{item.name}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <p className="review_message">{item.review}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSlide;

function getReview() {
  return [
    {
      name: "Cinday L. Wilson",
      date: "July 18",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      name: "Cinday L. Wilson",
      date: "July 18",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      name: "Cinday L. Wilson",
      date: "July 18",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
  ];
}
