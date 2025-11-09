import { useState } from 'react';
import HomePage from './pages/HomePage';
import Docs from './pages/Docs'; // <--- import Docs
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<Docs />} /> {/* route baru */}
      </Routes>
    </HashRouter>
  );
}

export default App;
