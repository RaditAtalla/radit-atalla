import React from "react";

const TechStack = ({ title, image}) => {
  return (
    <div className="flex flex-col items-center gap-[10px] group">
      <img src={image} alt="react logo" className="h-[83px]" />
      <p className="text-[10px] bg-cyanOpacity10 group-hover:bg-[#3D7D9E] transition-colors px-[15px] py-[3px] rounded-full">
        {title}
      </p>
    </div>
  );
};

export default TechStack;
