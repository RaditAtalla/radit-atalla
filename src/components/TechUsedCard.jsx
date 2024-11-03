import React from "react";

const TechUsedCard = ({ title, image }) => {
  return (
    <div className="inline-flex items-center bg-cyanOpacity10 rounded-full px-[10px] py-[5px]">
      <img src={image} alt="react logo" className="w-[15px] h-[15px]" />
      <p className="text-[10px]">{title}</p>
    </div>
  );
};

export default TechUsedCard;
