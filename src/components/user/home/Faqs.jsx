import React from "react";
import "./faqs.css";

import SingleFaq from "./SingleFaq";
const Faqs = () => {
  return (
    <div className="faq_main">
        <p className="faq_main_title" >Questions maid service owners usually ask us…</p>
      <div className="faq_container">
        {getFaq().map((item, index) => (
          <SingleFaq faq={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;

function getFaq() {
  return [
    {
      question:
        "I don't have time to enter all my clients ... Can STRIDE help?",
      answer:
        "Learn how STRIDE and Debbie Sardone’s Cleaning Business Fundamentals course changed this maid service owner’s life and helped her build a 6 figure maid service!",
    },
    {
      question:
        "I don't have time to enter all my clients ... Can STRIDE help?",
      answer:
        "Learn how STRIDE and Debbie Sardone’s Cleaning Business Fundamentals course changed this maid service owner’s life and helped her build a 6 figure maid service!",
    },
    {
      question:
        "I don't have time to enter all my clients ... Can STRIDE help?",
      answer:
        "Learn how STRIDE and Debbie Sardone’s Cleaning Business Fundamentals course changed this maid service owner’s life and helped her build a 6 figure maid service!",
    },
    {
      question:
        "I don't have time to enter all my clients ... Can STRIDE help?",
      answer:
        "Learn how STRIDE and Debbie Sardone’s Cleaning Business Fundamentals course changed this maid service owner’s life and helped her build a 6 figure maid service!",
    },
    {
      question:
        "I don't have time to enter all my clients ... Can STRIDE help?",
      answer:
        "Learn how STRIDE and Debbie Sardone’s Cleaning Business Fundamentals course changed this maid service owner’s life and helped her build a 6 figure maid service!",
    },
    {
      question:
        "I don't have time to enter all my clients ... Can STRIDE help?",
      answer:
        "Learn how STRIDE and Debbie Sardone’s Cleaning Business Fundamentals course changed this maid service owner’s life and helped her build a 6 figure maid service!",
    },
  ];
}
