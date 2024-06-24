import React, { useState } from "react";
import plusIcon from "../../../assets/icons/plus_icon.svg";
import "./faqs.css";
const SingleFaq = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div onClick={openHandler} className="single_faq">
      <div className="single_faq_piar">
        <p className="faq_question">{faq?.question}</p>
        <img src={plusIcon} className={isOpen ? "faq_close" : "faq_open"} />
      </div>
      <p className={isOpen ? "faq_anser_show" : "faq_answer"}>{faq?.answer}</p>
    </div>
  );
};

export default SingleFaq;
