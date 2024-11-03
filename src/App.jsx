import AchievementCard from "./components/AchievementCard";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <div className="px-[150px] py-[50px] flex gap-[100px]">
      <div className="fixed   ">
        <div className="mb-[60px]">
          <h1 className="font-bold text-[3rem]">Hello, i am Radit</h1>
          <div className="flex gap-[10px]">
            <SkillCard
              title={"Frontend"}
              circleColor={"bg-[#F16529]"}
              borderColor={"before:from-[#F16529]"}
              bgColor={"from-[#33251F]"}
            />
            <SkillCard
              title={"Backend"}
              circleColor={"bg-[#F5DE19]"}
              borderColor={"before:from-[#F5DE19]"}
              bgColor={"from-[#33311D]"}
            />
            <SkillCard
              title={"Mobile"}
              circleColor={"bg-[#2965F1]"}
              borderColor={"before:from-[#2965F1]"}
              bgColor={"from-[#1F2533]"}
            />
          </div>
        </div>
        <div className="mb-[30px]">
          <h2 className="font-medium text-[1.5rem] mb-[10px]">About me</h2>
          <div className="flex flex-col gap-[5px] bg-cyanOpacity5 rounded-[10px] py-[30px] px-[20px]">
            <p>🏫 Telkom University</p>
            <p>🖥️ Software Engineering Major</p>
            <p>📍 Bandung, Indonesia</p>
          </div>
        </div>
        <div className="mb-[120px]">
          <h2 className="font-medium text-[1.5rem] mb-[10px]">Tech Stack</h2>
          <div className="bg-cyanOpacity5 flex gap-[20px] justify-center rounded-[10px] py-[30px] px-[20px]">
            <div className="flex flex-col items-center">
              <img src="img/react.svg" alt="react logo" className="w-[80px]" />
              <p className="text-[10px] bg-cyanOpacity10 rounded-full px-[10px] py-[3px]">
                React
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="img/tailwind.svg"
                alt="tailwind logo"
                className="w-[80px]"
              />
              <p className="text-[10px] bg-cyanOpacity10 rounded-full px-[10px] py-[3px]">
                TailwindCSS
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="img/express.svg"
                alt="express logo"
                className="w-[80px]"
              />
              <p className="text-[10px] bg-cyanOpacity10 rounded-full px-[10px] py-[3px]">
                ExpressJS
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="img/mysql.svg" alt="mysql logo" className="w-[80px]" />
              <p className="text-[10px] bg-cyanOpacity10 rounded-full px-[10px] py-[3px]">
                MySQL
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="img/php.svg" alt="php logo" className="w-[80px]" />
              <p className="text-[10px] bg-cyanOpacity10 rounded-full px-[10px] py-[3px]">
                PHP
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-light text-[14px]">
            Copyright © 2024 Raditya A. Rachmadie
          </p>
          <div className="flex gap-[10px]">
            <a href="" className="font-light text-[14px] underline">
              LinkedIn
            </a>
            <a href="" className="font-light text-[14px] underline">
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[500px]"></div>
      <div className="flex flex-col">
        <div className="flex gap-[30px] mb-[30px]">
          <p className="font-medium text-[1.5rem] mb-[10px]">My Projects</p>
          <p className="font-medium text-[1.5rem] mb-[10px] opacity-50">Achievements</p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <ProjectCard
            title={"Portofolio Website"}
            date={"2 Nov 2024"}
            image={"img/banner.png"}
            imageAlt={"banner"}
            techs={[
              { tech: "ReactJS", techImg: "img/react.svg" },
              { tech: "TailwindCSS", techImg: "img/tailwind.svg" },
            ]}
          />
          <ProjectCard
            title={"Portofolio Website"}
            date={"2 Nov 2024"}
            image={"img/banner.png"}
            imageAlt={"banner"}
            techs={[
              { tech: "ReactJS", techImg: "img/react.svg" },
              { tech: "TailwindCSS", techImg: "img/tailwind.svg" },
            ]}
          />
          <ProjectCard
            title={"Portofolio Website"}
            date={"2 Nov 2024"}
            image={"img/banner.png"}
            imageAlt={"banner"}
            techs={[
              { tech: "ReactJS", techImg: "img/react.svg" },
              { tech: "TailwindCSS", techImg: "img/tailwind.svg" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
