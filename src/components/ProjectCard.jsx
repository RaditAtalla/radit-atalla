import React from "react";

const ProjectCard = ({ image, imageAlt, title, date, techs = [{}] }) => {
  return (
    <div className="bg-cyanOpacity5 rounded-[10px] border-[3px] border-cyanOpacity hover:border-[#3D7D9E] group cursor-pointer transition divide-y-2 divide-cyanOpacity">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className="h-[150px] object-cover rounded-t-[5px]"
      />
      <div className="p-[20px] flex justify-between">
        <div className="flex flex-col gap-[10px]">
          <h3 className="font-bold text-[1.5rem] group-hover:underline">{title}</h3>
          <div className="flex flex-wrap gap-[10px] max-w-[90%]">
            {techs.map((tech, i, techs) => {
              return (
                <div className="inline-flex hover:bg-[#3D7D9E] transition-colors cursor-auto items-center bg-cyanOpacity10 rounded-full px-[10px] py-[5px]">
                  <img src={techs[i].techImg} className="w-[15px] h-[15px]" />
                  <p className="text-[10px]">{techs[i].tech}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="min-w-[10%]">
          <p className="font-light text-[12px] text-end">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
