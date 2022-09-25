import React from "react";

const Button = ({
  color,
  bgColor,
  text,
  borderRadius,
  size,
  icon,
  customFunc,
}) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 hover:drop-shadow-xl`}
      onClick={customFunc}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
