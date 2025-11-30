import React from "react";
import { portfolioData } from "../../mock";
import { Zap, Code, Server, TrendingUp, Cpu } from "lucide-react";

// --- Kartu teknologi ---
const TechCard = ({ tech }) => {
  const levelColor =
    tech.level >= 70
      ? "bg-indigo-500"
      : tech.level >= 50
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition transform hover:scale-[1.03] hover:shadow-indigo-500/30 flex flex-col">
      <div className="flex items-center space-x-4 mb-3">
        {tech.icon && (
          <img
            src={tech.icon}
            alt={`${tech.name} icon`}
            className="h-10 w-10 object-contain"
          />
        )}
        <div>
          <h3 className="text-xl font-bold text-white">{tech.name}</h3>
          <p className="text-sm text-indigo-400 font-light">{tech.category}</p>
        </div>
      </div>
      {tech.description && (
        <p className="text-gray-400 text-sm flex-grow mb-4">{tech.description}</p>
      )}
      <div>
        <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
          <span>Proficiency</span>
          <span className="font-semibold text-white">{tech.level}%</span>
        </div>
        <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
          <div
            className={`h-2 rounded-full ${levelColor} transition-all duration-1000 ease-out`}
            style={{ width: `${tech.level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// --- Komponen Utama Tech Map ---
export default function TechExpertiseMap() {
  const { techStack } = portfolioData;

  if (!techStack || techStack.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8 text-center">
        Data Tech Stack tidak ditemukan.
      </div>
    );
  }

  // Kategori Modern vs Traditional
  const modernStack = techStack.filter((tech) =>
    ["Next.js", "React.js", "Tailwind CSS", "Electron.js"].includes(tech.name)
  );
  const traditionalStack = techStack.filter((tech) =>
    ["Laravel", "Bootstrap", "PHP", "MySQL", "Node.js"].includes(tech.name)
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto py-10">

        {/* Hero / Intro */}
        <header className="text-center mb-16 bg-gray-800 p-8 rounded-xl shadow-2xl border border-indigo-700">
          <h1 className="text-4xl font-extrabold text-white mb-3 flex items-center justify-center space-x-3">
                        <span>Keahlian</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Memilih teknologi adalah sebuah <b> investasi jangka panjang</b>. Oleh karena itu saya menjamin  keahlian teknologi yang saya miliki 
            dapat membangun Bisnis anda lebih baik. 
          </p>
          <div className="flex justify-center flex-wrap space-x-6 mt-6 text-sm text-gray-400">
            <p className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span>Modern & Scalable</span>
            </p>
            <p className="flex items-center space-x-2">
              <Code className="h-4 w-4 text-indigo-400" />
              <span>Traditional & Stable</span>
            </p>
          </div>
        </header>

        {/* Modern Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-400 border-b border-indigo-700 pb-3 mb-6 text-center flex items-center justify-center space-x-3">
            <Code className="h-6 w-6" />
            <span>Modern Stack</span>
          </h2>
          <p className="text-center text-gray-300 mb-6 max-w-3xl mx-auto">
            Untuk website modern, scalable, dan investasi jangka panjang, aku ahli menggunakan: Next.js, React.js, Tailwind CSS, Electron.js.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modernStack.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </section>

        {/* Traditional Stack */}
        <section>
          <h2 className="text-3xl font-bold text-indigo-400 border-b border-indigo-700 pb-3 mb-6 text-center flex items-center justify-center space-x-3">
            <Server className="h-6 w-6" />
            <span>Traditional / Enterprise Stack</span>
          </h2>
          <p className="text-center text-gray-300 mb-6 max-w-3xl mx-auto">
            Untuk website stabil, ringan, atau berbasis enterprise, aku menguasai Laravel, Bootstrap, PHP, MySQL, Node.js.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traditionalStack.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          Keahlian saya mencakup teknologi modern dan tradisional, siap untuk kebutuhan proyek profesional dan jangka panjang.
        </footer>
      </div>
    </div>
  );
}
