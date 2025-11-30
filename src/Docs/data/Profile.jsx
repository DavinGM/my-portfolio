// Import data dari lokasi mock
import { portfolioData } from "../../mock";
import { 
  Mail, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter 
} from "lucide-react";

// Komponen ikon sosial
const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-indigo-400 transition duration-300"
  >
    {children}
  </a>
);

export default function Profile() {
  const { profile, socials } = portfolioData;

  // Icon mapping untuk media sosial
  const icons = {
    instagram: Instagram,
    facebook: Facebook,
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">

        {/* Banner */}
        <div
          className="relative h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${profile.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Avatar */}
          <div className="absolute -bottom-16 left-8 sm:left-12">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-32 w-32 rounded-full border-4 border-indigo-500 object-cover shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="p-6 pt-20 sm:p-12 sm:pt-20">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                {profile.name}
              </h1>

              <p className="text-xl text-indigo-400 font-light mt-1">
                {profile.title}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                ({profile.nicknames.join(" | ")}) - {profile.location}
              </p>
            </div>

            <div className="hidden sm:flex space-x-6 mt-4 sm:mt-0">
              {/* tempat untuk content lain */}
            </div>
          </div>

          {/* Grid Utama */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Tentang Saya */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-indigo-400 border-b border-indigo-700 pb-1 mb-3">
                Tentang Saya
              </h2>

              <p className="text-gray-300 italic leading-relaxed mb-4">
                "{profile.bio}"
              </p>

              <p className="text-gray-400 leading-relaxed text-base">
                {profile.keterangan}
              </p>
            </div>

            {/* Kontak */}
            <div className="lg:col-span-1 bg-gray-700 p-6 rounded-xl shadow-inner">
              <h2 className="text-xl font-semibold text-white mb-4">
                Kontak Cepat
              </h2>

              <div className="flex flex-col space-y-3">
                {socials.map((item, idx) => {
                  const key = Object.keys(item).find(k => k !== "icon");
                  const url = item[key];
                  const Icon = icons[key] || Send;

                  return (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-indigo-400 transition duration-200"
                    >
                      <span className="w-5 h-5 flex items-center justify-center text-indigo-400">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="capitalize">{key}</span>
                    </a>
                  );
                })}
              </div>

              <button className="mt-6 w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition duration-300 shadow-lg transform hover:-translate-y-0.5">
                Hubungi Langsung
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
