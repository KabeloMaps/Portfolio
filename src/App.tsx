"use client";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import About from "./components/About";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="bg-black">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <About />
      <Footer />
    </div>
  );
}
