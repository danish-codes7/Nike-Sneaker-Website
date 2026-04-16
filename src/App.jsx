import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <div className={`h-screen w-screen overflow-x-hidden relative ${!loading ? "animate-hero-enter" : ""}`}>
        <div className="absolute top-0 left-0 right-0 px-10 py-5 z-50">
          <Navbar />
        </div>
        {/* Hero Section - Background */}
        <HeroSection isLoaded={!loading} />
      </div>

      <style>{`
        @keyframes heroEnter {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-hero-enter {
          animation: heroEnter 0.6s ease-in-out forwards;
        }
      `}</style>
    </>
  );
};

export default App;
