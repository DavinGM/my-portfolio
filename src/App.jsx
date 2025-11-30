import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import Docs from "./pages/Docs";
import { HashRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/ux/LoadingScreen";

function App() {
  const [loadingStage, setLoadingStage] = useState(1); 
  // 1 = loading browser, 2 = loading seeder, 0 = selesai

  useEffect(() => {
    const handleLoad = () => {
      // browser load selesai → masuk tahap 2
      setLoadingStage(2);

      // tahap 2 bertahan 3 detik → selesai
      setTimeout(() => {
        setLoadingStage(0);
      }, 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // tampilkan loading berdasarkan stage
  if (loadingStage === 1) return <LoadingScreen stage={1} />;
  if (loadingStage === 2) return <LoadingScreen stage={2} />;

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
