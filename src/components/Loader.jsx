import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const [showSplit, setShowSplit] = useState(false);
  const logoRef = useRef(null);
  const barContainerRef = useRef(null);
  const barFillRef = useRef(null);
  const splitUpRef = useRef(null);
  const splitDownRef = useRef(null);

  // GSAP Animations
  useGSAP(() => {
    const tl = gsap.timeline();

    // Nike logo blinks in center (0-1.2s)
    tl.from(logoRef.current, {
    y:30,
      opacity: 0,
      duration: 0.8,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Progress bar appears and starts filling (1.8-4.0s, duration 2.2s)
    tl.from(
      barContainerRef.current,
      {
        opacity: 0,
        duration: 0.2,
      },
      1.0
    );

    tl.to(
      barFillRef.current,
      {
        width: "100%",
        duration: 2.2,
        ease: "power1.inOut",
      },
      1.0
    );

    // Both logo and progress bar fade out together (3.2-3.8s)
    tl.to(
      logoRef.current,
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
      3.2
    );

    tl.to(
      barContainerRef.current,
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
      3.2
    );
  }, []);

  useEffect(() => {
    // Trigger split animation at 3.2s (when both fade out together)
    const splitTimer = setTimeout(() => {
      setShowSplit(true);
    }, 3200);

    // Complete loader at 4.2s (3.2 + 1.0 for split animation)
    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 4200);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Split animations when triggered
  useGSAP(() => {
    if (!showSplit) return;

    gsap.to(splitUpRef.current, {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
    });

    gsap.to(splitDownRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
    });
  }, [showSplit]);

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Main Loader Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-gray-900 flex flex-col gap-5 items-center justify-center z-10">
        {/* Nike Logo */}
        <img
          ref={logoRef}
          src="/images/nike-logo.png"
          className="w-32 "
          alt="Nike"
        />

        {/* Progress Bar */}
        <div
          ref={barContainerRef}
          className="w-72 h-[2px] bg-white/20 rounded-full overflow-hidden"
        >
          <div
            ref={barFillRef}
            className="h-full bg-white relative"
            style={{ width: "0%" }}
          >
            <div className="absolute inset-0 blur-sm bg-white/80"></div>
          </div>
        </div>
      </div>

      {/* Upper Split Part */}
      {showSplit && (
        <div
          ref={splitUpRef}
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-slate-900 via-black to-gray-900 z-50"
        />
      )}

      {/* Bottom Split Part */}
      {showSplit && (
        <div
          ref={splitDownRef}
          className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-br from-slate-900 via-black to-gray-900 z-50"
        />
      )}
    </div>
  );
};

export default Loader;