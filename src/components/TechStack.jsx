import React from "react";

const TechStack = ({ title, image}) => {
  return (
    <div className="flex flex-col items-center gap-[10px]">
      <img src={image} alt="react logo" className="h-[83px]" />
      <p className="text-[10px] bg-cyanOpacity10 px-[15px] py-[3px] rounded-full">
        {title}
      </p>
    </div>
  );
};

export default TechStack;
