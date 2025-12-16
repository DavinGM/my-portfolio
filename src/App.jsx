import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Docs from "./pages/Docs";
import ProjectPage from "./pages/ProjectPage";
import LoadingScreen from "./components/ux/LoadingScreen";
import Dock from "./components/ui/Dock";
import NotFound from "./pages/NotFound";


import {
  VscHome,
  VscProject,
  VscBook,
  VscAccount,
} from "react-icons/vsc";

function AppContent() {
  const navigate = useNavigate();

  const items = [
    {
      icon: <VscBook size={18} />,
      label: "Docs",
      onClick: () => navigate("/docs"),
    },
    {
      icon: <VscProject size={18} />,
      label: "Project",
      onClick: () => navigate("/project"),
    },
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Profile",
      onClick: () => navigate("/profile"),
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/project" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>

      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </>
  );
}

export default function App() {
  const [loadingStage, setLoadingStage] = useState(1);

  useEffect(() => {
    const handleLoad = () => {
      setLoadingStage(2);
      setTimeout(() => setLoadingStage(0), 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loadingStage === 1) return <LoadingScreen stage={1} />;
  if (loadingStage === 2) return <LoadingScreen stage={2} />;

  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
