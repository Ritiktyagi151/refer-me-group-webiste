import React, { useState, useEffect } from "react";

const BrainLoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Premium color palette
  const colors = {
    primary: "#4F46E5", // Deep indigo
    secondary: "#7C3AED", // Royal purple
    accent: "#EC4899", // Pink accent
    bg: "#0F172A", // Dark navy background
    card: "#1E293B", // Elevated card
    text: "#E2E8F0", // Soft white text
    subtle: "#94A3B8", // Subtle text
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }
        return prev + (prev < 90 ? 1.5 : 0.5); // Natural deceleration
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Generate floating knowledge particles
  const generateParticles = () => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 90 + 5,
      bottom: Math.random() * (progress - 10) + 5,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.4 + 0.3,
    }));
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.02,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-medium tracking-tight mb-2"
            style={{ color: colors.text }}
          >
            REFER ME GROUP
          </h2>
          <p className="text-sm" style={{ color: colors.subtle }}>
            {isComplete ? "Analysis complete" : "Mapping cognitive patterns..."}
          </p>
        </div>

        {/* Brain Visualization */}
        <div className="relative w-72 h-72 mx-auto mb-12">
          {/* Outer glow when complete */}
          {isComplete && (
            <div
              className="absolute inset-0 rounded-full opacity-0 animate-glow"
              style={{
                boxShadow: `0 0 0 8px rgba(79, 70, 229, 0.3)`,
                animation: "glow-pulse 2s ease-out 2",
              }}
            />
          )}

          {/* Brain container */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden transition-all duration-500"
            style={{
              backgroundColor: colors.card,
              boxShadow: "inset 0 4px 20px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {/* Knowledge fill */}
            <div
              className="absolute bottom-0 left-0 right-0 transition-all duration-300 ease-out"
              style={{
                height: `${progress}%`,
                background: `linear-gradient(to top, ${colors.primary}, ${colors.secondary})`,
                opacity: 0.95,
              }}
            >
              {/* Floating particles */}
              {generateParticles().map((p) => (
                <div
                  key={p.id}
                  className="absolute rounded-full bg-white animate-float"
                  style={{
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    left: `${p.left}%`,
                    bottom: `${p.bottom}%`,
                    opacity: p.opacity,
                    animationDelay: `${p.delay}s`,
                    animationDuration: `${p.duration}s`,
                  }}
                />
              ))}
            </div>

            {/* Brain details */}
            <div className="absolute inset-4 rounded-full border border-white/10"></div>

            {/* Brain icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">
              <span className="opacity-90" style={{ color: colors.text }}>
                🧠
              </span>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="text-center">
          <div
            className="text-2xl font-medium mb-4"
            style={{ color: colors.text }}
          >
            {Math.round(progress)}%
          </div>

          {/* Sleek progress bar */}
          {/* <div className="relative h-2 w-full max-w-xs mx-auto rounded-full overflow-hidden"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <div 
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
                boxShadow: `0 0 10px ${colors.primary}`
              }}
            />
          </div> */}

          {/* <div className="text-xs mt-4 tracking-widest uppercase"
            style={{ color: colors.subtle }}>
            {isComplete ? 'Ready' : 'Processing'}
          </div> */}
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-12px) translateX(6px) rotate(2deg);
            opacity: 0.8;
          }
        }
        @keyframes glow-pulse {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.02);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BrainLoadingAnimation;
