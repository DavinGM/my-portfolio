import { portfolioData } from "../../mock";

import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Youtube,
  Link as LinkIcon,
} from "lucide-react";

// Map ikon sosial (style match dengan Profile)
const SocialIconsMap = {
  instagram: { icon: Instagram, color: "text-pink-400 hover:text-pink-300" },
  facebook: { icon: Facebook, color: "text-blue-500 hover:text-blue-400" },
  linkedin: { icon: Linkedin, color: "text-blue-400 hover:text-blue-300" },
  github: { icon: Github, color: "text-gray-300 hover:text-white" },
  twitter: { icon: Twitter, color: "text-sky-400 hover:text-sky-300" },
  mail: { icon: Mail, color: "text-gray-300 hover:text-white" },
  youtube: { icon: Youtube, color: "text-red-500 hover:text-red-400" },
  link: { icon: LinkIcon, color: "text-gray-300 hover:text-white" },
};

export default function Socials() {
  const { profile, socials } = portfolioData;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8 flex flex-col items-center">
      
      {/* Container */}
      <div className="w-full max-w-3xl bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-10 mt-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-24 w-24 rounded-full border-4 border-indigo-500 object-cover shadow-xl mb-4 transition hover:scale-105"
          />
          <h1 className="text-3xl font-extrabold tracking-tight">
            {profile.name}
          </h1>
          <p className="text-md text-indigo-400">{profile.title}</p>
          <p className="text-sm text-gray-400 italic mt-2">
            "{profile.bio.substring(0, 70)}..."
          </p>
        </div>

        {/* Judul */}
        <h2 className="text-2xl font-semibold text-indigo-400 border-b border-indigo-700 pb-2 text-center mb-6">
          Temukan Saya di
        </h2>

        {/* List Sosial */}
        <div className="space-y-4">
          {socials.map((item, index) => {
            // Ambil key pertama (instagram, facebook, ...)
            const key = Object.keys(item)[0];
            const url = item[key];

            const { icon: Icon, color } =
              SocialIconsMap[key] || {
                icon: LinkIcon,
                color: "text-gray-400",
              };

            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-between p-4
                  bg-gray-700 rounded-xl shadow-lg
                  transition duration-300 hover:scale-[1.02]
                  hover:shadow-indigo-500/20
                "
              >
                <div className="flex items-center space-x-4">
                  <Icon className={`h-6 w-6 ${color}`} />

                  <span className="text-lg font-medium capitalize text-white">
                    {key}
                  </span>
                </div>

                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            );
          })}
        </div>
      </div>

      <footer className="mt-8 text-sm text-gray-600">
        Dibuat oleh {profile.name} • {new Date().getFullYear()}
      </footer>
    </div>
  );
}
