import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";

import AboutUs from "./sections/AboutUs";
import CaseStudies from "./sections/CaseStudies";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";
import FinancialTruth from "./sections/FinancialTruth";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Impact from "./sections/Impact";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";

function Home() {
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const scrollToSection = () => {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Home render hone ke baad scroll
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToSection);
    });
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <FinancialTruth />
      <WhyChooseUs />
      <AboutUs />
      <Impact />
      <CaseStudies />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#171817] text-[#F3F1EB]">
      <Navbar />

      <main>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
