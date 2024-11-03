import AchievementCard from "./components/AchievementCard";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import TechStack from "./components/TechStack";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState(false);

  return (
    <div className="px-[150px] py-[50px] flex gap-[150px]">
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
            <TechStack title={"React"} image={"img/react.svg"} />
            <TechStack title={"TailwindCSS"} image={"img/tailwind.svg"} />
            <TechStack title={"ExpressJS"} image={"img/express.svg"} />
            <TechStack title={"MySQL"} image={"img/mysql.svg"} />
            <TechStack title={"PHP"} image={"img/php.svg"} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-light text-[14px]">
            Copyright © 2024 Raditya A. Rachmadie
          </p>
          <div className="flex gap-[10px]">
            <a
              href="https://www.linkedin.com/in/radityaatalla/"
              target="_blank"
              className="font-light text-[14px] underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RaditAtalla"
              target="_blank"
              className="font-light text-[14px] underline"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[500px]"></div>
      <div className="flex flex-col">
        <div className="flex gap-[30px] mb-[30px]">
          <p
            className={`font-medium text-[1.5rem] mb-[10px] cursor-pointer transition-opacity ${page && "opacity-50 hover:opacity-75"}`}
            onClick={() => setPage(!page)}
          >
            My Projects
          </p>
          <p
            className={`font-medium text-[1.5rem] mb-[10px] cursor-pointer transition-opacity ${page == false && "opacity-50 hover:opacity-75"}`}
            onClick={() => setPage(!page)}
          >
            Achievements
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          {page ? (
            <>
              <AchievementCard
                title={"Web Programming Basic | Certification"}
                event={"Dicoding"}
                date={"September 2023"}
              />
              <AchievementCard
                title={"Web Techonologies Competition | 2nd place"}
                event={"LKS SMK Sumut | Disdik Sumut"}
                date={"June 2023"}
              />
              <AchievementCard
                title={"Web Development Competition | 3rd place"}
                event={"I/O Fest Untar 2023 | BEM FTI Untar"}
                date={"May 2023"}
              />
              <AchievementCard
                title={"Web Technologies Competition | 1st place"}
                event={"LKS SMK Medan | Disdik Medan"}
                date={"May 2023"}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
