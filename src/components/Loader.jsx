import React, { useState, useEffect } from "react";

const Loader = ({ onComplete }) => {
  const [showSplit, setShowSplit] = useState(false);

  useEffect(() => {
    // After 2.2 seconds (progress bar complete), start split animation
    const splitTimer = setTimeout(() => {
      setShowSplit(true);
    }, 2200);

    // After split animation completes (2.2 + 1.0 = 3.2 seconds), notify parent
    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 3200);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999]">
      <style>{`
        /* Logo subtle pulse - blinks while loading */
        @keyframes logoPulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-logo {
          animation: logoPulse 0.8s ease-in-out infinite;
        }

        /* Smooth premium loading bar */
        @keyframes loadingBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-loading-bar {
          animation: loadingBar 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Upper part goes right and disappears */
        @keyframes splitUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%) translateX(100%);
            opacity: 0;
          }
        }

        /* Bottom part goes left and disappears */
        @keyframes splitDown {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100%) translateX(-100%);
            opacity: 0;
          }
        }

        .split-up {
          animation: splitUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .split-down {
          animation: splitDown 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      {/* Main Loader Background */}
      <div className="absolute inset-0 bg-black flex flex-col items-center justify-center gap-8 z-10">
        {/* Nike Logo - Blinking until progress fills */}
        <img
          src="/images/nike-logo.png"
          className="w-26 animate-logo"
          alt="Nike"
        />

        {/* Progress Bar */}
        <div className="w-56 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-white animate-loading-bar relative">
            <div className="absolute inset-0 blur-sm bg-white/60"></div>
          </div>
        </div>
      </div>

      {/* Upper Split Part - Only show after progress completes */}
      {showSplit && (
        <div className="absolute top-0 left-0 w-full h-1/2 bg-black z-50 split-up" />
      )}

      {/* Bottom Split Part - Only show after progress completes */}
      {showSplit && (
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-50 split-down" />
      )}
    </div>
  );
};

export default Loader;