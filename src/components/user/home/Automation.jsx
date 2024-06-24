import React from "react";
import "./automation.css";
import bellIcon from "../../../assets/icons/bell_icon.svg";
import checkIcon from "../../../assets/icons/check_icon.svg";
import dateIcon from "../../../assets/icons/date_color_icon.svg";
import Button from "../../ui/Button";
import tiltArrow from "../../../assets/icons/arrow_tilt.svg";
const Automation = () => {
  return (
    <div className="automation_main">
      <div className="auto_content">
        <p>AUTOMATION THAT FEELS LIKE MAGIC</p>
        <p>
          Save 25+ hours per week with automated communications and more,
          designed by cleaning industry experts.
        </p>
        <p>
          Cut down by 70% the time you spend sending emails and texts to your
          customers and team!
        </p>
      </div>
      <div className="automation_section">
        {getAutomation().map((item, index) => {
          return (
            <div key={index} className={`automation_container${index}`}>
              <img src={item.icon} className="auto_icon" />
              <p className="auto_title">{item.title} </p>
              <p className="auto_description">{item.detail}</p>
              <p className="auto_feature">{item.feature}</p>
            </div>
          );
        })}
      </div>
      <div className="auto_action">
        <Button width="160px" varient="outline" clr="white" radius="18px">
          <span>Read More</span>
          <img src={tiltArrow} className="auto_read_icon" />
        </Button>
      </div>
    </div>
  );
};

export default Automation;
function getAutomation() {
  return [
    {
      title: "Automated Appointment confirmation",
      icon: checkIcon,
      detail: "We scheduled your cleaning appointment for next Tuesday",
      feature: "Confirm appointments autometically",
    },
    {
      title: "Automated Work Orders",
      icon: dateIcon,
      detail: "Work orders for tomorrow’s appointment...",
      feature: "Keep your cleaners updated",
    },
    {
      title: "Automated Customer Appointment reminders",
      icon: bellIcon,
      detail:
        "our cleaning is scheduled tomorrow at 09:00 am. Do you want to...",
      feature: "No more - No shows",
    },
  ];
}
