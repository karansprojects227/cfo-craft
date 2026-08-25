import { Routes, Route } from "react-router-dom";

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
      <Footer />
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
    </div>
  );
}

export default App;