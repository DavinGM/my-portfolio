import { useState } from "react";
import { portfolioData } from "../mock";
import { pageMap } from "./data/pageMap";

export default function DocsLayout() {
  const menuItems = Object.keys(portfolioData);
  const [activePage, setActivePage] = useState(menuItems[0]);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200">



      {/* Spacer untuk mendorong konten turun karena navbar fixed */}
      <div className="h-14"></div>

      {/* ============== LAYOUT WRAPPER (sidebar tidak fixed) ============== */}
      <div className="flex w-full">

        {/* ===== SIDEBAR (non-fixed) ===== */}
        <aside className="w-64 bg-black/20 border-r border-white/5 p-6">
        <h2 className="text-gray-400 text-sm mb-4 uppercase tracking-wider">
          MENU
        </h2>

        <ul className="space-y-2">
          {menuItems.map((menu) => (
            <li key={menu}>
              <button
                onClick={() => setActivePage(menu)}
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

        {/* ===== CONTENT ===== */}
        <main className="flex-1 p-10">
          <ContentRenderer page={activePage} />
        </main>

      </div>
    </div>
  );
}

/* =======================================================
   CONTENT RENDERER 
======================================================= */

function ContentRenderer({ page }) {
  const PageComponent = pageMap[page];

  if (!PageComponent) {
    return <p className="text-gray-400">Tidak ada data.</p>;
  }

  return <PageComponent />;
}