import React from "react";
import "./formcards.css";
import formCard1 from "../../../assets/form_card1.png";
import formCard2 from "../../../assets/form_card2.png";
import formCard3 from "../../../assets/form_card3.png";
import formCard4 from "../../../assets/form_card4.png";
const FormCards = () => {
  return (
    <div className="form_card_main">
      {getFormCards().map((item, index) => {
        return (
          <div key={index} className="form_card_container">
            <div className="form_card_content">
              <p>{item.title}</p>
              <p>{item.highlight}</p>
              <p>{item.detail}</p>
            </div>
            <div className="form_card_card">
              <img src={item.img} className="form_card_img" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormCards;

function getFormCards() {
  const cardArray = [
    {
      title: "BOOKING FORMS THAT MAKE YOU MONEY",
      highlight: "Grow your revenue and impress your clients",
      detail: "with beautifully designed high-converting booking forms.",
      img: formCard1,
    },
    {
      title: "05+ AWESOME FEATURES",
      highlight: "Manage your maid service like a real pro",
      detail: "with 05+ features like invoicing, payroll and so much more.",
      img: formCard2,
    },
    {
      title: "NEW FEATURES EVERY MONTH",
      highlight: "Enjoy awesome monthly updates and improvements",
      detail: " by working with an established trusted partner.",
      img: formCard3,
    },
    {
      title: "A SUPPORTIVE COMMUNITY",
      highlight:
        "Become part of a community of maid service owners just like you, ",
      detail:
        "each cheering for your success and sharing tips to help you grow.",
      img: formCard4,
    },
  ];
  return cardArray;
}
