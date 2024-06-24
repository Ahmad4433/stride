import React from "react";
import "./home.css";
import Hero from "./Hero";
import Explore from "./Explore";
import Automation from "./Automation";
import FormCards from "./FormCards";
import Steps from "./Steps";
import ReviewSlide from "./ReviewSlide";
import ReviewContent from "./ReviewContent";
import Magzine from "./Magzine";
import Faqs from "./Faqs";
const Home = () => {
  return (
    <>
      <Hero />
      <Explore />
      <Automation />
      <FormCards />
      <Steps />
      <ReviewContent />
      <ReviewSlide />
      <Magzine />
      <Faqs />
    </>
  );
};

export default Home;
