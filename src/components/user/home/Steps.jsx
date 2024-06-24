import React from "react";
import "./steps.css";
import step1 from "../../../assets/step1.png";
import step2 from "../../../assets/step2.png";
import step3 from "../../../assets/form_card3.png";
import logoStep from "../../../assets/logo_step.svg";
import Button from "../../ui/Button";
const Steps = () => {
  return (
    <div className="steps_main">
      <div className="step_page_content">
        <p>1:1 PERSONALIZED ONBOARIDNG</p>
        <p>Get started in a few easy steps. No technical skills required!</p>
        <p>
          It's easy, just create your FREE account and lock-in your 1:1
          optimization call with the STRIDE maid expert team.
        </p>
      </div>
      {steps().map((item, index) => {
        return (
          <div key={index} className="steps_container">
            <div className="steps_content_main">
              <span>{index + 1}</span>
              <div className=" steps_content">
                <p>{item.title}</p>
                <p>{item.detail}</p>
              </div>
            </div>
            <div className="step_image">
              <img src={item.img} className="step_img" />
            </div>
          </div>
        );
      })}
      <div className="step_bottom_content">
        <p>That’s it!</p>
        <p>
          Enjoy your new stress-free life and start growing your cleaning
          business!
        </p>
        <img src={logoStep} />
        <div>
          <Button clr="white" radius="1rem" width="200px">
            Get started for free
          </Button>
          <Button radius="1rem" varient="outline" clr="black" width="200px">
            Watch a demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Steps;

function steps() {
  return [
    {
      title: "Create your FREE trial account and ",
      detail: "set up your account in a few easy steps.",
      img: step1,
    },
    {
      title:
        "Book your free optimization call with our team of maid experts, and get all your questions answered,",
      detail:
        " plus a bunch of personalized tips and tricks to run your cleaning business like a pro.",
      img: step2,
    },
    {
      title:
        "Get your contacts and calendar imported to STRIDE by our support team.",
      detail: " Focus on evaluating STRIDE not formatting a spreadsheet.",
      img: step3,
    },
  ];
}
