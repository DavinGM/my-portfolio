import React from "react";
import { useNavigate } from "react-router-dom";
import { portfolioData } from "../mock";
import AnimatedContent from "./ui/AnimatedContent";
import Dock from "./ui/Dock";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";

const TechStackSection = () => {
  const navigate = useNavigate();
  const limitedTech = portfolioData.techStack.slice(0, 5);
  const goToDetail = (tech) => {
    navigate(`/tech/${tech.name.toLowerCase()}`);
  };
  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  return (
    <section id="techstack" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER RATA TENGAH */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="text-[#8B5CF6]">Tumpukan</span> teknologi
          </h2>
          <p className="text-gray-400 mt-2 text-lg">
            Teknologi & alat yang saya gunakan setiap hari
          </p>
        </div>


<AnimatedContent
  distance={100}
  direction="vertical"
  reverse={false}
  duration={1.9}
  ease="power3.out"
  initialOpacity={0}
  animateOpacity={100}
  scale={1.1}
  threshold={0.1}
  delay={0}
>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {limitedTech.map((tech, i) => (
            <button
              key={i}
              onClick={() => goToDetail(tech)}
              className="
                bg-[#0f0f10]/70
                backdrop-blur-xl
                border border-white/5
                rounded-2xl
                p-6
                flex flex-col items-center
                transition-all duration-300
                hover:scale-[1.07]
                hover:border-[#8B5CF6]/40
                hover:shadow-xl hover:shadow-[#8B5CF6]/20
                cursor-pointer
                group
              "
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="
                  h-14 w-14 object-contain 
                  drop-shadow-[0_5px_18px_rgba(139,92,246,0.55)] 
                  group-hover:drop-shadow-[0_5px_20px_rgba(168,85,247,0.75)]
                  transition-all
                "
              />

              <span className="text-white text-sm font-medium mt-4">
                {tech.name}
              </span>
            </button>
          ))}
        </div>

</AnimatedContent>


        {/* GRID CARD */}

        {/* VIEW MORE BUTTON */}
        <div className="flex justify-end mt-10">
          <button
            onClick={() => navigate("/tech")}
            className="
            cursor-target
              text-[#A855F7]
              font-semibold
              text-lg
              hover:text-white
              transition-all duration-300
              flex items-center gap-2
              hover:translate-x-1
            "
          >
            View More →
          </button>
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
