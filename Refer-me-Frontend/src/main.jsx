// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import BrainLoadingAnimation from "./components/BrainLoadingAnimation.jsx";

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 2 sec fake loader, ya API ke hisab se hata de
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <BrainLoadingAnimation /> : <App />}</>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);