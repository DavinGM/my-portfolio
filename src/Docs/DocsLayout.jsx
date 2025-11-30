import { useState } from "react";
import { portfolioData } from "../mock";
import { pageMap } from "./data/pageMap";

export default function DocsLayout() {
  const menuItems = Object.keys(portfolioData);
  const [activePage, setActivePage] = useState(menuItems[0]);

  // state untuk sidebar mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200 relative">

      <div className="h-14"></div>

      <div className="flex w-full">
        <aside
          className={`
            w-64 bg-black/20 border-r border-white/5 p-6 backdrop-blur-md
            h-[calc(100vh-56px)] overflow-y-auto
            fixed top-14 left-0 z-40
            transform transition-transform duration-300
            md:static md:translate-x-0
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <h2 className="text-gray-400 text-sm mb-4 uppercase tracking-wider">
            MENU
          </h2>

          <ul className="space-y-2">
            {menuItems.map((menu) => (
              <li key={menu}>
                <button
                  onClick={() => {
                    setActivePage(menu);
                    setMenuOpen(false); // auto close if mobile
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all
                    ${
                      activePage === menu
                        ? "bg-white/10 text-white font-semibold"
                        : "text-gray-300 hover:bg-white/5"
                    }
                  `}
                >
                  {menu}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          />
        )}


        <main className="flex-1 p-10 z-10">
          <ContentRenderer page={activePage} />
        </main>
      </div>


      <button
        onClick={() => setMenuOpen(true)}
        className="
          fixed bottom-4 left-4 z-30
          md:hidden
          bg-white/10 border border-white/20 
          px-4 py-2 rounded-lg text-sm
          backdrop-blur-lg
        "
      >
        Docs
      </button>
    </div>
  );
}

function ContentRenderer({ page }) {
  const PageComponent = pageMap[page];

  if (!PageComponent) {
    return <p className="text-gray-400">Tidak ada data.</p>;
  }

  return <PageComponent />;
}
