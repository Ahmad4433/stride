import React from "react";
import "./button.css";
const Button = ({
  children,
  onClick,
  varient,
  animation,
  clr,
  radius,
  width,
  size,
  shadow,
}) => {
  return (
    <button
      style={{
        color: clr,
        borderRadius: radius,
        width: width,
        border: varient === "outline" && `1px solid ${clr}`,
        fontSize: size,
        boxShadow: shadow && "0 0 60px #177a75",
      }}
      onClick={onClick ? onclick : null}
      className={
        varient === "outline"
          ? `action_button_outline ${animation && "action_animate"}`
          : `action_button_plane ${animation && "action_animate"}`
      }
    >
      {children}
    </button>
  );
};

export default Button;
