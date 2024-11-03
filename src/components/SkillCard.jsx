import React from "react";
import "../styles/skillCard.css";

const SkillCard = ({title, circleColor, bgColor, borderColor}) => {
  return (
    <div className={`relative inline-flex justify-center items-center gap-[5px] px-[15px] py-[5px] rounded-full bg-gradient-to-r ${bgColor} to-[#001B28] to-90% before:absolute before:rounded-full before:-z-10 before:w-[102%] before:h-[107%] before:bg-gradient-to-r ${borderColor} before:to-cyanOpacity10 before:to-70%`}>
      <div className={`h-[16px] w-[16px] rounded-full ${circleColor}`}></div>
      <p className="text-[1rem]">{title}</p>
    </div>
  );
};

export default SkillCard;
