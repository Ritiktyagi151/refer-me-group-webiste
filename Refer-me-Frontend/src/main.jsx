import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // ✅ Import this

import "./index.css";
import App from "./App.jsx";
import BrainLoadingAnimation from "./components/BrainLoadingAnimation.jsx";

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 4 second loading time thoda zyada hai user experience ke liye, 
    // par abhi ke liye code logic fix karte hain.
    const timer = setTimeout(() => setLoading(false), 4000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <BrainLoadingAnimation /> : <App />}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* ✅ Provider ko sabse bahar lagao */}
    <HelmetProvider>
      <Main />
    </HelmetProvider>
  </StrictMode>
);