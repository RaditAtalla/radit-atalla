import AchievementCard from "./components/AchievementCard";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <div className="flex justify-between gap-[150px]">
      {/* sisi kiri */}
      <div>
        <div className="mb-[70px]">
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
        <div className="flex flex-col gap-[10px] mb-[30px]">
          <h2 className="font-medium text-[1.5rem]">About me</h2>
          <div className="w-[100%] flex flex-col gap-[5px] bg-cyanOpacity5 rounded-[10px] p-[30px]">
            <p>🏫 Telkom University</p>
            <p>🖥️ Software Engineering Major</p>
            <p>📍Bandung, Indonesia</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] ">
          <h2 className="font-medium text-[1.5rem]">Tech Stack</h2>
          <div className="w-[100%] flex gap-[20px] bg-cyanOpacity5 rounded-[10px] py-[20px] px-[15px]">
            <TechStack title={"React"} image={"img/react.svg"} />
            <TechStack title={"TailwindCSS"} image={"img/tailwind.svg"} />
            <TechStack title={"ExpressJS"} image={"img/express.svg"} />
            <TechStack title={"MySQL"} image={"img/mysql.svg"} />
            <TechStack title={"PHP"} image={"img/php.svg"} />
          </div>
        </div>
      </div>
      {/* sisi kanan */}
      <div className="flex flex-col gap-[30px]">
        <div className="flex gap-[20px]">
          <p className="font-medium text-[1.5rem]">My Project</p>
          <p className="font-medium text-[1.5rem] opacity-50">Achievements</p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <ProjectCard
            title={"Portofolio Webiste"}
            date={"2 Nov 2024"}
            techs={[
              { tech: "ReactJS", techImg: "img/react.svg" },
              { tech: "TailwindCSS", techImg: "img/tailwind.svg" },
            ]}
            image={"img/web1.png"}
            imageAlt={"Portofolio website"}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
