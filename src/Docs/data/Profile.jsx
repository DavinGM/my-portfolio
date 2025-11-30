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

  // 🔥 Batasi hanya 5 sosial link
  const limitedSocials = socials.slice(0, 5);

  // Mapping ikon
  const icons = {
    instagram: Instagram,
    facebook: Facebook,
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-2 py-4 sm:p-8">

      {/* FULL WIDTH mobile, max-width desktop */}
      <div
        className="
          w-full
          sm:max-w-7xl sm:mx-auto
          rounded-2xl sm:rounded-3xl
          shadow-2xl overflow-hidden
        "
      >
        {/* Banner */}
        <div
          className="relative h-48 sm:h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${profile.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Avatar */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2
              sm:left-12 sm:translate-x-0
              -bottom-12 sm:-bottom-16
            "
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="
                h-24 w-24 sm:h-32 sm:w-32
                rounded-full border-4 border-indigo-500 object-cover shadow-xl
                transition duration-500 hover:scale-105
              "
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 pt-20 sm:p-12 sm:pt-20">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 text-center sm:text-left">
            <div className="mx-auto sm:mx-0">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {profile.name}
              </h1>

              <p className="text-lg sm:text-xl text-indigo-400 font-light mt-1">
                {profile.title}
              </p>

              <p className="text-xs sm:text-sm text-indigo-600 mt-1">
                ({profile.nicknames.join(" | ")}) - {profile.location}
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-3">

            {/* ABOUT */}
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-400 border-b border-indigo-600 pb-1 mb-3">
                Tentang Saya
              </h2>

              <p className="text-gray-300 italic leading-relaxed mb-4 text-sm sm:text-base">
                "{profile.bio}"
              </p>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {profile.keterangan}
              </p>
            </div>

            {/* CONTACT */}
            <div
              className="
                lg:col-span-1
                bg-gray-700
                p-4 sm:p-6
                rounded-xl shadow-inner
              "
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Kontak Cepat
              </h2>

              <div className="flex flex-col space-y-3">

                {/* 🔥 Tampilkan hanya 5 sosial */}
                {limitedSocials.map((item, idx) => {
                  const key = Object.keys(item).find((k) => k !== "icon");
                  const url = item[key];
                  const Icon = icons[key] || Send;

                  return (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center space-x-3
                        text-gray-300 hover:text-indigo-400
                        transition duration-200
                      "
                    >
                      <span className="w-5 h-5 flex items-center justify-center text-indigo-400">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="capitalize text-sm sm:text-base">
                        {key}
                      </span>
                    </a>
                  );
                })}
              </div>

              <button
                className="
                  mt-6 w-full py-2 sm:py-3
                  bg-indigo-600 text-white font-bold rounded-lg
                  hover:bg-indigo-500 transition duration-300 shadow-lg
                  transform hover:-translate-y-0.5
                  text-sm sm:text-base
                "
              >
                Hubungi Langsung
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
