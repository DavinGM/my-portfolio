import React, { useState } from "react";
import { portfolioData } from "../../mock";

// Ikon dari lucide-react
import { 
  Code, 
  Server, 
  Cpu, 
  ChevronDown, 
  CheckCircle, 
  Target, 
  Link, 
  Wrench 
} from 'lucide-react';

const CategoryIconsMap = {
  "Frontend Development": Code,
  "Backend Development": Server,
  "DevOps & System Administration": Cpu,
  "Tools & Others": Wrench,
};

// --- Komponen Progress Bar ---
const SkillProgressBar = ({ level }) => {
  const color =
    level <= 30
      ? "bg-red-500"
      : level <= 70
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className="w-full bg-gray-600 rounded-full h-2.5 relative overflow-hidden">
      <div
        className={`h-2.5 rounded-full ${color} transition-all duration-1000`}
        style={{ width: `${level}%` }}
      ></div>

      <span className="absolute right-0 -top-5 text-xs font-semibold text-white/70">
        {level}%
      </span>
    </div>
  );
};

// --- Akordeon ---
const SkillCategoryAccordion = ({ categoryData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = CategoryIconsMap[categoryData.category] || LinkIcon;

  return (
    <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700/80 transition duration-500 hover:border-indigo-600/70">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <div className="flex items-center space-x-4">
          <Icon className="h-6 w-6 text-indigo-400" />
          <h3 className="text-xl font-bold text-white tracking-wide">
            {categoryData.category}
          </h3>
        </div>

        <ChevronDown
          className={`h-6 w-6 text-gray-400 transition-transform ${
            isOpen ? "rotate-180 text-indigo-400" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-4 border-t border-gray-600/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryData.items.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-inner transition hover:bg-gray-700/70"
              >
                <h4 className="text-lg font-semibold text-indigo-300 mb-1">
                  {skill.name}
                </h4>

                <SkillProgressBar level={skill.level} />

                <div className="mt-3 space-y-2 text-sm text-gray-400">
                  {/* Pengalaman */}
                  {skill.experience && (
                    <p className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-1 mr-2" />
                      <span>
                        <span className="font-medium text-gray-300 mr-1">
                          Pengalaman:
                        </span>
                        {skill.experience}
                      </span>
                    </p>
                  )}

                  {/* Deskripsi */}
                  {skill.description && (
                    <p className="flex items-start">
                      <Code className="h-4 w-4 text-indigo-400 mt-1 mr-2" />
                      <span>
                        <span className="font-medium text-gray-300 mr-1">
                          Kuasai:
                        </span>
                        {skill.description}
                      </span>
                    </p>
                  )}

                  {/* Target */}
                  {skill.focus && (
                    <p className="flex items-start">
                      <Target className="h-4 w-4 text-yellow-400 mt-1 mr-2" />
                      <span>
                        <span className="font-medium text-gray-300 mr-1">
                          Target:
                        </span>
                        {skill.focus}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Komponen Utama ---
export default function Skills() {
  const { skills } = portfolioData;

  if (!skills || skills.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8 text-center">
        Data keahlian tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-5xl mx-auto py-10">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-2">
             Keahlian & Keterampilan
          </h1>
          <p className="text-xl text-indigo-400 font-light">
            Tingkat penguasaan dan fokus pengembangan saya.
          </p>
        </header>

        <div className="space-y-6">
          {skills.map((category, index) => (
            <SkillCategoryAccordion key={index} categoryData={category} />
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          Tingkat keahlian (level) adalah perkiraan pribadi (0–100%).
        </footer>
      </div>
    </div>
  );
}
