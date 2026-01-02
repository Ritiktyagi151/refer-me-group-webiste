// src/main.jsx
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";
import BrainLoadingAnimation from "./components/BrainLoadingAnimation.jsx";

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 4 second loading time
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <BrainLoadingAnimation /> : <App />}</>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Main />
    </HelmetProvider>
  </StrictMode>
);
