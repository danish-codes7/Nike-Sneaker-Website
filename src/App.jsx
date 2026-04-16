import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden relative">
       <div className="absolute top-0 left-0 right-0 px-10 py-5 z-50">
              <Navbar />
            </div>
      {/* Hero Section - Background */}
      <HeroSection />
    </div>
  );
};

export default App;
