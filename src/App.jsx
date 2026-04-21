import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ShoesDetails from "./components/ShoesDetails";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <div className={`h-screen w-screen overflow-x-hidden relative ${!loading ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute top-0 left-0 right-0 px-10 py-5 z-50">
          <Navbar isLoaded={!loading} />
        </div>
        {/* Hero Section - Background */}
        <HeroSection isLoaded={!loading} />
        <ShoesDetails/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
